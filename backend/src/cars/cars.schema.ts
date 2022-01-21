import * as mongoose from 'mongoose';

export const CarsSchema = new mongoose.Schema({
  model: String,
});
