import { Injectable } from '@nestjs/common';
import { CreateTransformacionDto } from './dto/create-transformacion.dto';
import { UpdateTransformacionDto } from './dto/update-transformacion.dto';

@Injectable()
export class TransformacionService {
  create(createTransformacionDto: CreateTransformacionDto) {
    return 'This action adds a new transformacion';
  }

  findAll() {
    return `This action returns all transformacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transformacion`;
  }

  update(id: number, updateTransformacionDto: UpdateTransformacionDto) {
    return `This action updates a #${id} transformacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} transformacion`;
  }
}
