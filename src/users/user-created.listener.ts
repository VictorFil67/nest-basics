import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class UserCreatedListener {
  @OnEvent('user.created')
  handleUserCreated(payload: { userId: number }) {
    console.log('User created: ', payload.userId);
  }
}
