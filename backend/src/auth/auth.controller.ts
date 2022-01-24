import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() loginRequest) {
    const token = this.authService.login(loginRequest.email);
    return token;
  }
}
