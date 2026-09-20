import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovimientoCuentaCorrienteService } from './movimiento-cuenta-corriente.service';
import { CreateMovimientoCuentaCorrienteDto } from './dto/create-movimiento-cuenta-corriente.dto';
import { UpdateMovimientoCuentaCorrienteDto } from './dto/update-movimiento-cuenta-corriente.dto';

@Controller('movimiento-cuenta-corriente')
export class MovimientoCuentaCorrienteController {
  constructor(private readonly movimientoCuentaCorrienteService: MovimientoCuentaCorrienteService) {}

  @Post()
  create(@Body() createMovimientoCuentaCorrienteDto: CreateMovimientoCuentaCorrienteDto) {
    return this.movimientoCuentaCorrienteService.create(createMovimientoCuentaCorrienteDto);
  }

  @Get()
  findAll() {
    return this.movimientoCuentaCorrienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movimientoCuentaCorrienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovimientoCuentaCorrienteDto: UpdateMovimientoCuentaCorrienteDto) {
    return this.movimientoCuentaCorrienteService.update(+id, updateMovimientoCuentaCorrienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movimientoCuentaCorrienteService.remove(+id);
  }
}
