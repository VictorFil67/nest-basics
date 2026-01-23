import { Module } from '@nestjs/common';
import { UserEventsController } from './user-events.controller';

@Module({
  controllers: [UserEventsController],
})
export class AppModule {}
