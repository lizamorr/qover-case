import { Document } from 'mongoose';

export interface LoginRequest {
  params: {
    email: string;
    password: string;
  };
}

export interface User extends Document {
  email: string;
  password: string;
}
