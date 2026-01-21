import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserCreatedListener } from './user-created.listener';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserCreatedListener],
})
export class UsersModule {}
