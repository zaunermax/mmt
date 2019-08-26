import { SetMetadata } from '@nestjs/common';
import { Role } from '../types/Role';

export const SetRole = (role: Role) => SetMetadata('role', role);
