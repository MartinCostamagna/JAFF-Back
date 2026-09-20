import { Module } from '@nestjs/common';
import { TurnoUsuarioService } from './turno-usuario.service';
import { TurnoUsuarioController } from './turno-usuario.controller';

@Module({
  controllers: [TurnoUsuarioController],
  providers: [TurnoUsuarioService],
})
export class TurnoUsuarioModule {}
