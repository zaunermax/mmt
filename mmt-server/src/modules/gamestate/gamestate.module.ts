import { Module } from '@nestjs/common';
import { GamestateService } from './gamestate.service';
import { GamestateController } from './gamestate.controller';

@Module({
  imports: [],
  providers: [GamestateService],
  controllers: [GamestateController],
  exports: [GamestateService],
})
export class GamestateModule {}
