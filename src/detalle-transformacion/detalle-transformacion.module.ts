import { Module } from '@nestjs/common';
import { DetalleTransformacionService } from './detalle-transformacion.service';
import { DetalleTransformacionController } from './detalle-transformacion.controller';

@Module({
  controllers: [DetalleTransformacionController],
  providers: [DetalleTransformacionService],
})
export class DetalleTransformacionModule {}
