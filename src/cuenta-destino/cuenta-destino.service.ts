import { Injectable } from '@nestjs/common';
import { CreateCuentaDestinoDto } from './dto/create-cuenta-destino.dto';
import { UpdateCuentaDestinoDto } from './dto/update-cuenta-destino.dto';

@Injectable()
export class CuentaDestinoService {
  create(createCuentaDestinoDto: CreateCuentaDestinoDto) {
    return 'This action adds a new cuentaDestino';
  }

  findAll() {
    return `This action returns all cuentaDestino`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cuentaDestino`;
  }

  update(id: number, updateCuentaDestinoDto: UpdateCuentaDestinoDto) {
    return `This action updates a #${id} cuentaDestino`;
  }

  remove(id: number) {
    return `This action removes a #${id} cuentaDestino`;
  }
}
