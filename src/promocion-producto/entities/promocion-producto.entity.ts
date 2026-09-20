import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { Promocion } from '../../promocion/entities/promocion.entity';
import { Producto } from '../../producto/entities/producto.entity';

@Entity('promociones_productos')
@Unique(['idPromocion', 'idProducto'])
export class PromocionProducto {
    @PrimaryGeneratedColumn()
    idPromocionProducto!: number;

    @Column({ type: 'int' })
    idPromocion!: number;

    @Column({ type: 'varchar', length: 100 })
    idProducto!: string;

    @Column({
        type: 'decimal', precision: 10, scale: 2, transformer: {
            to: (value: number) => value,
            from: (value: string) => parseFloat(value),
        },
    })
    cantidad!: number;

    @ManyToOne(() => Promocion, (promocion) => promocion.promocionesProducto)
    @JoinColumn({ name: 'idPromocion' })
    promocion!: Promocion;

    @ManyToOne(() => Producto, (producto) => producto.promocionesProducto)
    @JoinColumn({ name: 'idProducto' })
    producto!: Producto;
}


