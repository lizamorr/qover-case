import { Controller, Post, HttpStatus, Res, Body } from '@nestjs/common';
import { LoginRequest } from './login.interface';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  async authenticateLogin(
    @Res() res,
    @Body() loginRequest: LoginRequest,
  ): Promise<any> {
    const validUser = await this.loginService.authenticateLogin(loginRequest);
    return res.status(HttpStatus.OK).json(validUser);
  }
}
