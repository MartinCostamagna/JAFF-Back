import { PartialType } from '@nestjs/mapped-types';
import { CreateDetalleTransformacionDto } from './create-detalle-transformacion.dto';

export class UpdateDetalleTransformacionDto extends PartialType(CreateDetalleTransformacionDto) {}
