import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [{ id: 1, name: 'John' }];

  findAll() {
    return this.users;
  }

  findById(id: number) {
    return this.users.find((u) => u.id === id);
  }

  create(name: string) {
    const user = { id: this.users.length + 1, name };
    this.users.push(user);
    return user;
  }
}
