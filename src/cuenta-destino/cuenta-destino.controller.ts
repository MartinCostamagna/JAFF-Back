import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CuentaDestinoService } from './cuenta-destino.service';
import { CreateCuentaDestinoDto } from './dto/create-cuenta-destino.dto';
import { UpdateCuentaDestinoDto } from './dto/update-cuenta-destino.dto';

@Controller('cuenta-destino')
export class CuentaDestinoController {
  constructor(private readonly cuentaDestinoService: CuentaDestinoService) {}

  @Post()
  create(@Body() createCuentaDestinoDto: CreateCuentaDestinoDto) {
    return this.cuentaDestinoService.create(createCuentaDestinoDto);
  }

  @Get()
  findAll() {
    return this.cuentaDestinoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cuentaDestinoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCuentaDestinoDto: UpdateCuentaDestinoDto) {
    return this.cuentaDestinoService.update(+id, updateCuentaDestinoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cuentaDestinoService.remove(+id);
  }
}
