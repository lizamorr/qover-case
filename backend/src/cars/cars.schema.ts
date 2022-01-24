import * as mongoose from 'mongoose';

export const CarsSchema = new mongoose.Schema({
  model: String,
  insurancePrice: Number,
  universalPercentageOfValue: Number,
  minAge: { value: Number, required: false },
  minPrice: { value: Number, required: false },
});
