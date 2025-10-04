import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/create-auth.dto';
import { AuthGuard } from '@nestjs/passport';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/apply')
  async signIn(@Body() body: AuthDto) {
    return await this.authService.apply(body);
  }
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async sinUp(@Req() req: { user: any }) {
    if (!req.user) {
      return { code: 3001, message: '用户名或密码错误' };
    }
    console.log(req.user);
    return await this.authService.login(req.user);
  }
  @Get('/verifyToken')
  async verifyToken(@Query('token') token: string) {
    return await this.authService.verifyJWT(token);
  }
}
