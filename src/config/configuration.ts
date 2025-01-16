import * as process from 'process';
export const configuration = () => ({
  logLvl: process.env.LOG_LVL || 'debug',
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.APP_PORT ?? '3000', 10),
  swaggerEnabled: process.env.SWAGGER_ENABLED === 'true',
  openAiApiKey: process.env.OPENAI_API_KEY,
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callBackUri: process.env.GOOGLE_CALLBACK_URI,
  },
});
