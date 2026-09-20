import { Module } from '@nestjs/common';
import { PromocionProductoService } from './promocion-producto.service';
import { PromocionProductoController } from './promocion-producto.controller';

@Module({
  controllers: [PromocionProductoController],
  providers: [PromocionProductoService],
})
export class PromocionProductoModule {}
