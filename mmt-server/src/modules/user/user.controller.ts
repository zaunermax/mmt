import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../types/entities/user.entity';
import { NewUser } from '../../types/dto/NewUser';
import { AuthGuard } from '@nestjs/passport';
import { RemoveUser } from '../../types/dto/RemoveUser';
import { SetRole } from '../../decorators/roles.decorator';
import { Role } from '../../types/Role';
import { RoleGuard } from '../../guards/RoleGuard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: number): Promise<User> {
    return this.userService.findOneOrFail(id);
  }

  @Post()
  @SetRole(Role.admin)
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  addUser(@Body() body: NewUser): Promise<User> {
    return this.userService.addUser(body);
  }

  @Delete()
  @UseGuards(AuthGuard('jwt'))
  removeUser(@Body() body: RemoveUser) {
    return this.userService.removeUser(body.id);
  }
}
