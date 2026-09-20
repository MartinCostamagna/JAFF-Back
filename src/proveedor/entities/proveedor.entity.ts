import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProductoProveedor } from '../../producto-proveedor/entities/producto-proveedor.entity';
import { Entrada } from '../../entrada/entities/entrada.entity';

@Entity('proveedores')
export class Proveedor {
    @PrimaryGeneratedColumn()
    idProveedor!: number;

    @Column({ type: 'varchar', length: 150 })
    nombre!: string;

    @OneToMany(() => ProductoProveedor, (productoProveedor) => productoProveedor.proveedor)
    productosProveedor!: ProductoProveedor[];

    @OneToMany(() => Entrada, (entrada) => entrada.proveedor)
    entradas!: Entrada[];
}
