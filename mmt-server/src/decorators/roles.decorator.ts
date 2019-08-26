import { SetMetadata } from '@nestjs/common';
import { Role } from '../types/Role';

export const Roles = (role: Role) => SetMetadata('role', role);
