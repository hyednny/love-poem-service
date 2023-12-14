import { Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './controller/users.controller';
import { UsersService } from './service/users.service';
import mongoose from 'mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI, { connectionName: '' }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule implements NestModule {
  configure() {
    mongoose.set('debug', true);
  }
}
