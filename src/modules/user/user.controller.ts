import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('sign-in')
  async createUser(@Body() userDto: UserDto) {
    return this.userService.createUser(userDto);
  }

  @Get('user-info')
  async getUserInfo(@Body() userDto: UserDto) {
    return this.userService.getUserInfo(userDto.email);
  }
}
