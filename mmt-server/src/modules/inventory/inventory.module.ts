import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';

@Module({
  imports: [UserModule],
  providers: [InventoryService],
  controllers: [InventoryController],
  exports: [],
})
export class InventoryModule {}
