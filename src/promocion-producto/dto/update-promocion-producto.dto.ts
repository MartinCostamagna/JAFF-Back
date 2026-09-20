import { PartialType } from '@nestjs/mapped-types';
import { CreatePromocionProductoDto } from './create-promocion-producto.dto';

export class UpdatePromocionProductoDto extends PartialType(CreatePromocionProductoDto) {}
