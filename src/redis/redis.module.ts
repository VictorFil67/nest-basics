import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'REDIS_CLIENT',
        transport: Transport.REDIS,
        options: { host: '127.0.0.1', port: 6379 },
      },
    ]),
  ],
  //   exports: ['REDIS_CLIENT'],
  exports: [ClientsModule],
})
export class RedisModule {}
