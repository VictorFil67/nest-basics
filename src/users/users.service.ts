import { Injectable, NotFoundException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class UsersService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  private users = [{ id: 1, name: 'John' }];

  findAll() {
    return this.users;
  }

  findById(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  create(name: string) {
    const user = { id: this.users.length + 1, name };
    this.users.push(user);
    this.eventEmitter.emit('user.created', { userId: user.id });
    return user;
  }
}
