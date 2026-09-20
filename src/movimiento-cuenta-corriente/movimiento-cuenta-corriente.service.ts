import { Injectable } from '@nestjs/common';
import { CreateMovimientoCuentaCorrienteDto } from './dto/create-movimiento-cuenta-corriente.dto';
import { UpdateMovimientoCuentaCorrienteDto } from './dto/update-movimiento-cuenta-corriente.dto';

@Injectable()
export class MovimientoCuentaCorrienteService {
  create(createMovimientoCuentaCorrienteDto: CreateMovimientoCuentaCorrienteDto) {
    return 'This action adds a new movimientoCuentaCorriente';
  }

  findAll() {
    return `This action returns all movimientoCuentaCorriente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movimientoCuentaCorriente`;
  }

  update(id: number, updateMovimientoCuentaCorrienteDto: UpdateMovimientoCuentaCorrienteDto) {
    return `This action updates a #${id} movimientoCuentaCorriente`;
  }

  remove(id: number) {
    return `This action removes a #${id} movimientoCuentaCorriente`;
  }
}
