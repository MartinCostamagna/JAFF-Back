import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductoProveedorService } from './producto-proveedor.service';
import { CreateProductoProveedorDto } from './dto/create-producto-proveedor.dto';
import { UpdateProductoProveedorDto } from './dto/update-producto-proveedor.dto';

@Controller('producto-proveedor')
export class ProductoProveedorController {
  constructor(private readonly productoProveedorService: ProductoProveedorService) {}

  @Post()
  create(@Body() createProductoProveedorDto: CreateProductoProveedorDto) {
    return this.productoProveedorService.create(createProductoProveedorDto);
  }

  @Get()
  findAll() {
    return this.productoProveedorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productoProveedorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoProveedorDto: UpdateProductoProveedorDto) {
    return this.productoProveedorService.update(+id, updateProductoProveedorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productoProveedorService.remove(+id);
  }
}
