import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ReqWithUser } from '../types/ReqWithUser';
import { Role } from '../types/Role';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const role = this.reflector.get<Role>('role', context.getHandler());
    if (!role) return true;
    const request = context.switchToHttp().getRequest<ReqWithUser>();
    const user = request.user;
    return user.role === role;
  }
}
