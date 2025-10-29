import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async listUsers() {
    return {
      message: 'Lista de usuarios traidos exitosamente',
      data: await this.userService.list(),
    };
  }
}
