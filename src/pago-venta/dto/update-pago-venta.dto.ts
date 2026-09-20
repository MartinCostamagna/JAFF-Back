import { PartialType } from '@nestjs/mapped-types';
import { CreatePagoVentaDto } from './create-pago-venta.dto';

export class UpdatePagoVentaDto extends PartialType(CreatePagoVentaDto) {}
