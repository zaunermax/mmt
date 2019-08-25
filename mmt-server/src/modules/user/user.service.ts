import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../types/entities/user.entity';
import { Repository } from 'typeorm';
import { Maybe } from '../../types/common/helpers';
import { NewUser } from '../../types/dto/NewUser';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    private readonly authService: AuthService,
  ) {}

  async findAllUsers(): Promise<User[]> {
    return this.userRepo.find();
  }

  async findOneOrFail(userId: number): Promise<User> {
    const user = await this.userRepo.findOne(userId);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async findOneByName(userName: string): Promise<Maybe<User>> {
    return this.userRepo.findOne({ where: { name: userName } });
  }

  async addUser(userDto: NewUser): Promise<User> {
    const pwHash = await this.authService.createPwHash(userDto.password);
    this.logger.verbose(`PW Hash: ${pwHash}`);
    const user = new User({
      balance: userDto.balance,
      name: userDto.name,
      pwHash,
    });
    const [newUser] = await this.userRepo.save([user]);
    delete newUser.pwHash;
    return newUser;
  }

  async removeUser(id: number): Promise<User[]> {
    const user = await this.findOneOrFail(id);
    return this.userRepo.remove([user]);
  }
}
