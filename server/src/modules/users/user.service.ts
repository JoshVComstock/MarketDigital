import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable({})
export class UserService {
  list() {
    throw new NotFoundException('Usuario no encontrado');
  }
}
