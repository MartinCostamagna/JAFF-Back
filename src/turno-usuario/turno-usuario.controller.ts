import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TurnoUsuarioService } from './turno-usuario.service';
import { CreateTurnoUsuarioDto } from './dto/create-turno-usuario.dto';
import { UpdateTurnoUsuarioDto } from './dto/update-turno-usuario.dto';

@Controller('turno-usuario')
export class TurnoUsuarioController {
  constructor(private readonly turnoUsuarioService: TurnoUsuarioService) {}

  @Post()
  create(@Body() createTurnoUsuarioDto: CreateTurnoUsuarioDto) {
    return this.turnoUsuarioService.create(createTurnoUsuarioDto);
  }

  @Get()
  findAll() {
    return this.turnoUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.turnoUsuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTurnoUsuarioDto: UpdateTurnoUsuarioDto) {
    return this.turnoUsuarioService.update(+id, updateTurnoUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.turnoUsuarioService.remove(+id);
  }
}
