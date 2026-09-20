import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { DetalleVenta } from '../../detalle-venta/entities/detalle-venta.entity';
import { PromocionProducto } from '../../promocion-producto/entities/promocion-producto.entity';
import { TipoPromocion } from '../entities/tipo-promocion.enum';

@Entity('promociones')
export class Promocion {
    @PrimaryGeneratedColumn()
    idPromocion!: number;

    @Column({ type: 'varchar', length: 150 })
    nombre!: string;

    @Column({ type: 'enum', enum: TipoPromocion })
    tipo!: TipoPromocion;

    @Column({
        type: 'decimal', precision: 10, scale: 2, transformer: {
            to: (value: number) => value,
            from: (value: string) => parseFloat(value),
        },
    })
    valorDescuento!: number;

    @Column({ type: 'boolean', default: true })
    activa!: boolean;

    @OneToMany(() => DetalleVenta, (detalleVenta) => detalleVenta.promocion)
    detallesVenta!: DetalleVenta[];

    @OneToMany(() => PromocionProducto, (promocionProducto) => promocionProducto.promocion)
    promocionesProducto!: PromocionProducto[];
}