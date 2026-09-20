import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Producto } from '../../producto/entities/producto.entity';

@Entity('categorias')
export class Categoria {
    @PrimaryGeneratedColumn()
    idCategoria!: number;

    @Column({ type: 'varchar', length: 100 })
    nombre!: string;

    @OneToMany(() => Producto, (producto) => producto.categoria)
    productos!: Producto[];
}
