import { Controller, Body, Patch, UseGuards, Request, Get, Query, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UseGuards(AuthGuard('jwt'))
  @Patch('/updata')
  update(@Request() req) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return this.userService.update(req.user.phoneNumber, req.body);
  }
  @UseGuards(AuthGuard('jwt'))
  @Patch('/changePassword')
  changePassword(@Request() req) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return this.userService.changePassword(req.user.phoneNumber, req.body);
  }
  @Get('userInof/:id')
  getUserInfo(@Param('id') id:number){
   return  this.userService.getUserInof(id)
  }
}

