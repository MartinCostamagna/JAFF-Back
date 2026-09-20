import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Venta } from '../../venta/entities/venta.entity';
import { Producto } from '../../producto/entities/producto.entity';
import { Promocion } from '../../promocion/entities/promocion.entity';

@Entity('detalles_venta')
export class DetalleVenta {
    @PrimaryGeneratedColumn()
    idDetalleVenta!: number;

    @Column({
        type: 'decimal', precision: 10, scale: 2, transformer: {
            to: (value: number) => value,
            from: (value: string) => parseFloat(value),
        },
    })
    cantidad!: number;

    @Column({
        type: 'decimal', precision: 10, scale: 2, transformer: {
            to: (value: number) => value,
            from: (value: string) => parseFloat(value),
        },
    })
    precioUnitario!: number;

    @Column({
        type: 'decimal', precision: 10, scale: 2, transformer: {
            to: (value: number) => value,
            from: (value: string) => parseFloat(value),
        },
    })
    subtotal!: number;

    @Column({ type: 'int' })
    idVenta!: number;

    @Column({ type: 'varchar', length: 100 })
    idProducto!: string;

    @Column({ type: 'int', nullable: true })
    idPromocion?: number;

    @ManyToOne(() => Venta, (venta) => venta.detallesVenta)
    @JoinColumn({ name: 'idVenta' })
    venta!: Venta;

    @ManyToOne(() => Producto, (producto) => producto.detallesVenta)
    @JoinColumn({ name: 'idProducto' })
    producto!: Producto;

    @ManyToOne(() => Promocion, (promocion) => promocion.detallesVenta, { nullable: true })
    @JoinColumn({ name: 'idPromocion' })
    promocion?: Promocion;
}
