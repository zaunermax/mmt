import { Controller, UseGuards, Post, Body, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SetRole } from '../../decorators/roles.decorator';
import { Role } from '../../types/Role';
import { RoleGuard } from '../../guards/RoleGuard';
import { StartGame } from '../../types/dto/StartGame';

@Controller('game')
export class GamestateController {
  private readonly logger = new Logger(GamestateController.name);

  @Post('start')
  @SetRole(Role.admin)
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  startGame(@Body() start: StartGame) {
    this.logger.verbose(`Starting game with ${start.minutes} minutes`);
  }
}
