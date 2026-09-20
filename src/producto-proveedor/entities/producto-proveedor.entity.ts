import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { Producto } from '../../producto/entities/producto.entity';
import { Proveedor } from '../../proveedor/entities/proveedor.entity';

@Entity('productos_proveedores')
@Unique(['idProducto', 'idProveedor'])
export class ProductoProveedor {
    @PrimaryGeneratedColumn()
    idProductoProveedor!: number;

    @Column({ type: 'varchar', length: 100 })
    idProducto!: string;

    @Column({ type: 'int' })
    idProveedor!: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precioCosto!: number;

    @ManyToOne(() => Producto, (producto) => producto.productosProveedor)
    @JoinColumn({ name: 'idProducto' })
    producto!: Producto;

    @ManyToOne(() => Proveedor, (proveedor) => proveedor.productosProveedor)
    @JoinColumn({ name: 'idProveedor' })
    proveedor!: Proveedor;
}
