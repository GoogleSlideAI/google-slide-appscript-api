import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async createUser(userDto: UserDto) {
    // Check if user with email already exists
    const existingUser = await this.userRepository.findOne({
      where: { email: userDto.email },
    });

    // If user doesn't exist, create new one
    if (!existingUser) {
      const user = this.userRepository.create(userDto);
      await this.userRepository.save(user);
    }

    return { success: true };
  }

  async getUserInfo(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    return user;
  }
}
