import { Module } from '@nestjs/common';
import { TransformacionService } from './transformacion.service';
import { TransformacionController } from './transformacion.controller';

@Module({
  controllers: [TransformacionController],
  providers: [TransformacionService],
})
export class TransformacionModule {}
