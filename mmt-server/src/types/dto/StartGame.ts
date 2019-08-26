import { IsNumber } from 'class-validator';

export class StartGame {
  @IsNumber()
  minutes!: number;
}
