// import { Controller, Post, Request, UseGuards } from '@nestjs/common';
// import { AppService } from './app.service';
// import { LoginService } from './login/login.service';
// import { LocalLoginGuard } from './login/local-login.guard';

// @Controller()
// export class AppController {
//   constructor(private loginService: LoginService) {}

//   @UseGuards(LocalLoginGuard)
//   @Post('login/login')
//   async login(@Request() req) {
//     return this.loginService.login(req.user);
//   }
// }

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
