import { Module } from '@nestjs/common';
import { CuentaDestinoService } from './cuenta-destino.service';
import { CuentaDestinoController } from './cuenta-destino.controller';

@Module({
  controllers: [CuentaDestinoController],
  providers: [CuentaDestinoService],
})
export class CuentaDestinoModule {}
