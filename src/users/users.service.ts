import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
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
    return user;
  }
}
