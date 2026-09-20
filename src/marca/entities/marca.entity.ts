import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Producto } from '../../producto/entities/producto.entity';

@Entity('marcas')
export class Marca {
    @PrimaryGeneratedColumn()
    idMarca!: number;

    @Column({ type: 'varchar', length: 100 })
    nombre!: string;

    @OneToMany(() => Producto, (producto) => producto.marca)
    productos!: Producto[];
}
