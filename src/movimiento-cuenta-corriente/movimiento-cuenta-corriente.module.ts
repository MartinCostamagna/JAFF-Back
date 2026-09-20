import { Module } from '@nestjs/common';
import { MovimientoCuentaCorrienteService } from './movimiento-cuenta-corriente.service';
import { MovimientoCuentaCorrienteController } from './movimiento-cuenta-corriente.controller';

@Module({
  controllers: [MovimientoCuentaCorrienteController],
  providers: [MovimientoCuentaCorrienteService],
})
export class MovimientoCuentaCorrienteModule {}
