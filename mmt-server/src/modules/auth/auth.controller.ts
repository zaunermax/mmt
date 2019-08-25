import {
  Controller,
  Post,
  UseGuards,
  Request,
  Logger,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ReqWithUser } from '../../types/ReqWithUser';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  public login(@Request() req: ReqWithUser): Promise<string> {
    return this.authService.createToken(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Request() req: ReqWithUser) {
    return req.user;
  }
}
