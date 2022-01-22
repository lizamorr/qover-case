import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginRequest, User } from './login.interface';

@Injectable()
export class LoginService {
  constructor(@InjectModel('Users') private readonly userModel: Model<User>) {}
  async authenticateLogin(loginRequest: LoginRequest): Promise<any> {
    const { email, password } = loginRequest.params;
    return this.userModel
      .find({
        $and: [
          {
            email: email,
          },
          {
            password: password,
          },
        ],
      })
      .then((validUser) => {
        if (validUser.length > 0) {
          return true;
        } else {
          throw new Error('No valid user match');
        }
      })
      .catch(() => {
        return false;
      });
  }
}
