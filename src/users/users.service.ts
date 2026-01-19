import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [{ id: 1, name: 'John' }];

  findAll() {
    return this.users;
  }

  create(name: string) {
    const user = { id: this.users.length + 1, name };
    this.users.push(user);
    return user;
  }
}
