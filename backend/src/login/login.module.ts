import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginController } from './login.controller';
import { LoginSchema } from './login.schema';
import { LoginService } from './login.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Users', schema: LoginSchema }]),
  ],
  controllers: [LoginController],
  providers: [LoginService],
  exports: [LoginService],
})
export class LoginModule {}
