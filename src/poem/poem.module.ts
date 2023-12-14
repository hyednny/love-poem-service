import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Poem, PoemSchema } from './poem.schema';
import { PoemService } from './poem.service';
import { PoemController } from './poem.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Poem.name, schema: PoemSchema }]),
  ],
  controllers: [PoemController],
  providers: [PoemService],
})
export class PoemModule {}
