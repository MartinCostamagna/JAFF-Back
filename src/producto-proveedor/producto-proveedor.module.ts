import { Module } from '@nestjs/common';
import { ProductoProveedorService } from './producto-proveedor.service';
import { ProductoProveedorController } from './producto-proveedor.controller';

@Module({
  controllers: [ProductoProveedorController],
  providers: [ProductoProveedorService],
})
export class ProductoProveedorModule {}
