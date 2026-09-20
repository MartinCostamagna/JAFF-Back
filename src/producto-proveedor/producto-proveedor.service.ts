import { Injectable } from '@nestjs/common';
import { CreateProductoProveedorDto } from './dto/create-producto-proveedor.dto';
import { UpdateProductoProveedorDto } from './dto/update-producto-proveedor.dto';

@Injectable()
export class ProductoProveedorService {
  create(createProductoProveedorDto: CreateProductoProveedorDto) {
    return 'This action adds a new productoProveedor';
  }

  findAll() {
    return `This action returns all productoProveedor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productoProveedor`;
  }

  update(id: number, updateProductoProveedorDto: UpdateProductoProveedorDto) {
    return `This action updates a #${id} productoProveedor`;
  }

  remove(id: number) {
    return `This action removes a #${id} productoProveedor`;
  }
}
