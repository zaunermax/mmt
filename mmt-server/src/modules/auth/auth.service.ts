import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';

import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { ConfigService } from '../config/config.service';
import { JwtToken } from '../../types/JwtToken';
import { Nullable } from '../../types/common/helpers';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private readonly jwtSecret: string;

  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly usersService: UserService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
    this.jwtSecret = configService.get('SECRET');
  }

  async validateUser(username: string, pass: string): Promise<Nullable<User>> {
    const user = await this.usersService.findOneByName(username);
    return user && (await bcrypt.compare(pass, user.pwHash)) ? user : null;
  }

  async validateTokenUser(userId: number): Promise<User> {
    return this.usersService.findOneOrFail(userId);
  }

  public createToken(user: User): Promise<string> {
    const payload: JwtToken = {
      name: user.name,
      role: user.role,
      id: user.id,
    };
    return this.jwtService.signAsync(payload);
  }

  public verifyToken(token: string): Promise<JwtToken> {
    return this.jwtService.verifyAsync<JwtToken>(token);
  }

  public async createPwHash(password: string): Promise<string> {
    this.logger.verbose('Creating password hash');
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }
}
