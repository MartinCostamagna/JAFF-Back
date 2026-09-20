import { Injectable } from '@nestjs/common';
import { CreateDetalleTransformacionDto } from './dto/create-detalle-transformacion.dto';
import { UpdateDetalleTransformacionDto } from './dto/update-detalle-transformacion.dto';

@Injectable()
export class DetalleTransformacionService {
  create(createDetalleTransformacionDto: CreateDetalleTransformacionDto) {
    return 'This action adds a new detalleTransformacion';
  }

  findAll() {
    return `This action returns all detalleTransformacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detalleTransformacion`;
  }

  update(id: number, updateDetalleTransformacionDto: UpdateDetalleTransformacionDto) {
    return `This action updates a #${id} detalleTransformacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalleTransformacion`;
  }
}
