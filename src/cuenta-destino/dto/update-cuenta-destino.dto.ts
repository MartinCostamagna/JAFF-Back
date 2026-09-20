import { PartialType } from '@nestjs/mapped-types';
import { CreateCuentaDestinoDto } from './create-cuenta-destino.dto';

export class UpdateCuentaDestinoDto extends PartialType(CreateCuentaDestinoDto) {}
