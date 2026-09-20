import { Injectable } from '@nestjs/common';
import { CreatePagoVentaDto } from './dto/create-pago-venta.dto';
import { UpdatePagoVentaDto } from './dto/update-pago-venta.dto';

@Injectable()
export class PagoVentaService {
  create(createPagoVentaDto: CreatePagoVentaDto) {
    return 'This action adds a new pagoVenta';
  }

  findAll() {
    return `This action returns all pagoVenta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pagoVenta`;
  }

  update(id: number, updatePagoVentaDto: UpdatePagoVentaDto) {
    return `This action updates a #${id} pagoVenta`;
  }

  remove(id: number) {
    return `This action removes a #${id} pagoVenta`;
  }
}
