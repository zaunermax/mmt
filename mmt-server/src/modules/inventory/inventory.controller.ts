import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ReqWithUser } from '../../types/ReqWithUser';
import { AuthGuard } from '@nestjs/passport';

@Controller('inventory')
export class InventoryController {
  @Get('space')
  @UseGuards(AuthGuard('jwt'))
  getInventorySpace(@Request() req: ReqWithUser): number {
    return req.user.inventorySpace;
  }
}
