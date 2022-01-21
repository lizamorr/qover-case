import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop({ required: true })
  model: string;
}

export const CarsSchema = SchemaFactory.createForClass(Car);
