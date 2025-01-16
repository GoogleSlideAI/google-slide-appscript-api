import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { OAuth2Client } from 'google-auth-library';
import { google } from 'googleapis';
import { slides_v1 } from 'googleapis';

import { GOOGLE_SCOPES } from './constants/google.constants';

@Injectable()
export class GoogleOauth2Service implements OnModuleInit {
  private oauth2Client: OAuth2Client;
  private readonly logger = new Logger(GoogleOauth2Service.name);

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
    await this.initializeAuth();
  }

  private async initializeAuth(): Promise<void> {
    try {
      const credentialsPath = this.configService.get<string>('GOOGLE_CREDENTIALS_PATH');
      const tokenPath = this.configService.get<string>('GOOGLE_TOKEN_PATH');

      if (!credentialsPath || !tokenPath) {
        throw new Error('Missing credentials or token path in configuration');
      }

      // Initialize OAuth2 client with proper type checking
      const credentialsFile = readFileSync(credentialsPath, 'utf-8');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const credentials = JSON.parse(credentialsFile);

      this.oauth2Client = new google.auth.OAuth2(
        credentials.client_id,
        credentials.client_secret,
        credentials.redirect_uris[0]
      );

      // Check for existing token
      if (existsSync(tokenPath)) {
        const tokenFile = readFileSync(tokenPath, 'utf-8');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const token = JSON.parse(tokenFile);

        this.oauth2Client.setCredentials(token);

        // Check token expiration
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const expiryDate = token.expiry_date;
        if (expiryDate && Date.now() > expiryDate - 5 * 60 * 1000) {
          // Token is expired or will expire in 5 minutes
          if (token.refresh_token) {
            const response = await this.oauth2Client.getAccessToken();
            if (response.token) {
              this.saveToken(response.token, tokenPath);
            }
          }
        }
      } else {
        // Generate new token
        const authUrl = this.oauth2Client.generateAuthUrl({
          access_type: 'offline',
          scope: GOOGLE_SCOPES,
        });

        this.logger.log('Authorize this app by visiting this URL:', authUrl);
        // Implementation note: In a production environment, you would need to implement
        // a proper OAuth2 callback endpoint to handle the authorization code
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      throw new Error(`Failed to initialize Google auth: ${errorMessage}`);
    }
  }

  private saveToken(tokens, tokenPath: string): void {
    try {
      writeFileSync(tokenPath, JSON.stringify(tokens, null, 2));
      this.logger.log('Token stored to ' + tokenPath);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      this.logger.error(`Failed to save token: ${errorMessage}`);
    }
  }

  getSlidesService(): Promise<slides_v1.Slides> {
    try {
      return Promise.resolve(google.slides({ version: 'v1', auth: this.oauth2Client }));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      throw new Error(`Failed to create Slides service: ${errorMessage}`);
    }
  }

  getDriveService() {
    try {
      return google.drive({ version: 'v3', auth: this.oauth2Client });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      throw new Error(`Failed to create Drive service: ${errorMessage}`);
    }
  }
}
