import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleTransformacionService } from './detalle-transformacion.service';
import { CreateDetalleTransformacionDto } from './dto/create-detalle-transformacion.dto';
import { UpdateDetalleTransformacionDto } from './dto/update-detalle-transformacion.dto';

@Controller('detalle-transformacion')
export class DetalleTransformacionController {
  constructor(private readonly detalleTransformacionService: DetalleTransformacionService) {}

  @Post()
  create(@Body() createDetalleTransformacionDto: CreateDetalleTransformacionDto) {
    return this.detalleTransformacionService.create(createDetalleTransformacionDto);
  }

  @Get()
  findAll() {
    return this.detalleTransformacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleTransformacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetalleTransformacionDto: UpdateDetalleTransformacionDto) {
    return this.detalleTransformacionService.update(+id, updateDetalleTransformacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleTransformacionService.remove(+id);
  }
}
