import { Controller, Body, Patch, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Patch('/updata')
  update(@Request() req) {
    return this.userService.update(req.user.phoneNumber, req.body);
  }
  @Patch('/changePassword')
  changePassword(@Request() req) {
    return this.userService.changePassword(req.user.phoneNumber, req.body);
  }
}
