import { Document } from 'mongoose';

export interface Car extends Document {
  readonly model: string;
  readonly insurancePrice: number;
  readonly universalPercentageOfValue: number;
  readonly minAge: number;
}
