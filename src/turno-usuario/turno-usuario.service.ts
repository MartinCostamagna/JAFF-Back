import { Injectable } from '@nestjs/common';
import { CreateTurnoUsuarioDto } from './dto/create-turno-usuario.dto';
import { UpdateTurnoUsuarioDto } from './dto/update-turno-usuario.dto';

@Injectable()
export class TurnoUsuarioService {
  create(createTurnoUsuarioDto: CreateTurnoUsuarioDto) {
    return 'This action adds a new turnoUsuario';
  }

  findAll() {
    return `This action returns all turnoUsuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} turnoUsuario`;
  }

  update(id: number, updateTurnoUsuarioDto: UpdateTurnoUsuarioDto) {
    return `This action updates a #${id} turnoUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} turnoUsuario`;
  }
}
