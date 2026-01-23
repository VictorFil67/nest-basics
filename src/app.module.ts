import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { RedisModule } from './redis/redis.module';
import { UserEventsController } from './consumer/user-events.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UserCreatedRedisListener } from './users/user-created.redis-listener';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    UsersModule,
    RedisModule,
    ClientsModule.register([
      {
        name: 'REDIS_CLIENT',
        transport: Transport.REDIS,
        options: {
          host: '127.0.0.1',
          port: 6379,
        },
      },
    ]),
  ],
  controllers: [AppController, UserEventsController, UsersController],
  providers: [AppService, UsersService, UserCreatedRedisListener],
})
export class AppModule {}
