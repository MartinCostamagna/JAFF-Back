import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransformacionService } from './transformacion.service';
import { CreateTransformacionDto } from './dto/create-transformacion.dto';
import { UpdateTransformacionDto } from './dto/update-transformacion.dto';

@Controller('transformacion')
export class TransformacionController {
  constructor(private readonly transformacionService: TransformacionService) {}

  @Post()
  create(@Body() createTransformacionDto: CreateTransformacionDto) {
    return this.transformacionService.create(createTransformacionDto);
  }

  @Get()
  findAll() {
    return this.transformacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transformacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransformacionDto: UpdateTransformacionDto) {
    return this.transformacionService.update(+id, updateTransformacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transformacionService.remove(+id);
  }
}
