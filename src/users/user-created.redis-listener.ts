import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class UserCreatedRedisListener {
  constructor(@Inject('REDIS_CLIENT') private readonly client: ClientProxy) {}

  @OnEvent('user.created')
  handleUserCreated(payload: { userId: number }) {
    console.log('EMIT TO REDIS:', payload);
    this.client.emit('user.created', payload).subscribe();
  }
}
