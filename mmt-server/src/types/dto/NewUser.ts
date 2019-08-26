import { IsNumber, IsOptional, IsString } from 'class-validator';

export class NewUser {
  @IsString()
  name!: string;

  @IsNumber()
  @IsOptional()
  balance?: number;

  @IsString()
  password!: string;
}
