import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ReqWithUser } from '../../types/ReqWithUser';

@Controller('game')
export class GamestateController {
  @Get('balance')
  @UseGuards(AuthGuard('jwt'))
  getBalance(@Request() req: ReqWithUser) {
    return req.user.balance;
  }
}
