import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Poem extends Document {
  @Prop({ required: true })
  @IsNotEmpty()
  name: string;

  @Prop({ required: true })
  @IsNotEmpty()
  content: string;
}

export const PoemSchema = SchemaFactory.createForClass(Poem);
