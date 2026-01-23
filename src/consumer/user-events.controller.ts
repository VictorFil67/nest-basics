import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class UserEventsController {
  @EventPattern('user.created')
  handle(data: any) {
    console.log('REDIS EVENT RECEIVED:', data);
  }
}
