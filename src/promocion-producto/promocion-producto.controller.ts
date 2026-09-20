import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PromocionProductoService } from './promocion-producto.service';
import { CreatePromocionProductoDto } from './dto/create-promocion-producto.dto';
import { UpdatePromocionProductoDto } from './dto/update-promocion-producto.dto';

@Controller('promocion-producto')
export class PromocionProductoController {
  constructor(private readonly promocionProductoService: PromocionProductoService) {}

  @Post()
  create(@Body() createPromocionProductoDto: CreatePromocionProductoDto) {
    return this.promocionProductoService.create(createPromocionProductoDto);
  }

  @Get()
  findAll() {
    return this.promocionProductoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.promocionProductoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePromocionProductoDto: UpdatePromocionProductoDto) {
    return this.promocionProductoService.update(+id, updatePromocionProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.promocionProductoService.remove(+id);
  }
}
