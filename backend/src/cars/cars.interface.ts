import { Document } from 'mongoose';

export interface Car extends Document {
  readonly model: string;
}
