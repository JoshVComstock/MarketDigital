import { Module } from '@nestjs/common';
import { UserModule } from './interface/users/user.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
