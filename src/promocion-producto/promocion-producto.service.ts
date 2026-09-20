import { Injectable } from '@nestjs/common';
import { CreatePromocionProductoDto } from './dto/create-promocion-producto.dto';
import { UpdatePromocionProductoDto } from './dto/update-promocion-producto.dto';

@Injectable()
export class PromocionProductoService {
  create(createPromocionProductoDto: CreatePromocionProductoDto) {
    return 'This action adds a new promocionProducto';
  }

  findAll() {
    return `This action returns all promocionProducto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} promocionProducto`;
  }

  update(id: number, updatePromocionProductoDto: UpdatePromocionProductoDto) {
    return `This action updates a #${id} promocionProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} promocionProducto`;
  }
}
