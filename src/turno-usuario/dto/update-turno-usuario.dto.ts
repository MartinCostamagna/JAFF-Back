import { PartialType } from '@nestjs/mapped-types';
import { CreateTurnoUsuarioDto } from './create-turno-usuario.dto';

export class UpdateTurnoUsuarioDto extends PartialType(CreateTurnoUsuarioDto) {}
