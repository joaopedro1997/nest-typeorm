import {Controller, Request, Post, UseGuards, Get} from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService, private appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello word!'
  }

  @UseGuards(LocalAuthGuard)
  @Post('api/auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}