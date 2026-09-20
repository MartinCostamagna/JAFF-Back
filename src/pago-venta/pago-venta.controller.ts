import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PagoVentaService } from './pago-venta.service';
import { CreatePagoVentaDto } from './dto/create-pago-venta.dto';
import { UpdatePagoVentaDto } from './dto/update-pago-venta.dto';

@Controller('pago-venta')
export class PagoVentaController {
  constructor(private readonly pagoVentaService: PagoVentaService) {}

  @Post()
  create(@Body() createPagoVentaDto: CreatePagoVentaDto) {
    return this.pagoVentaService.create(createPagoVentaDto);
  }

  @Get()
  findAll() {
    return this.pagoVentaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pagoVentaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePagoVentaDto: UpdatePagoVentaDto) {
    return this.pagoVentaService.update(+id, updatePagoVentaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pagoVentaService.remove(+id);
  }
}
