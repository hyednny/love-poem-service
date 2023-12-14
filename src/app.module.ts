import { Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PoemModule } from './poem/poem.module';
import mongoose from 'mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    UserModule,
    PoemModule,
  ],
})
export class AppModule implements NestModule {
  configure() {
    mongoose.set('debug', true);
  }
}
