import { Module } from '@nestjs/common';
import { PagoVentaService } from './pago-venta.service';
import { PagoVentaController } from './pago-venta.controller';

@Module({
  controllers: [PagoVentaController],
  providers: [PagoVentaService],
})
export class PagoVentaModule {}
