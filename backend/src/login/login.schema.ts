import * as mongoose from 'mongoose';

export const LoginSchema = new mongoose.Schema({
  email: String,
  password: String,
});
