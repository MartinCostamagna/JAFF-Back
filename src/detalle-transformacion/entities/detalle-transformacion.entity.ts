import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Transformacion } from '../../transformacion/entities/transformacion.entity';
import { Producto } from '../../producto/entities/producto.entity';
import { Lote } from '../../lote/entities/lote.entity';

@Entity('detalles_transformacion')
export class DetalleTransformacion {
    @PrimaryGeneratedColumn()
    idDetalleTransformacion!: number;

    @Column({ type: 'int' })
    idTransformacion!: number;

    @Column({ type: 'varchar', length: 100 })
    idProducto!: string;

    @Column({ type: 'int', nullable: true })
    idLote?: number;

    @Column({
        type: 'decimal', precision: 10, scale: 2, transformer: {
            to: (value: number) => value,
            from: (value: string) => parseFloat(value),
        },
    })
    cantidad!: number;

    @ManyToOne(() => Transformacion, (transformacion) => transformacion.detallesTransformacion)
    @JoinColumn({ name: 'idTransformacion' })
    transformacion!: Transformacion;

    @ManyToOne(() => Producto, (producto) => producto.detallesTransformacion)
    @JoinColumn({ name: 'idProducto' })
    producto!: Producto;

    @ManyToOne(() => Lote, (lote) => lote.detallesTransformacion, { nullable: true })
    @JoinColumn({ name: 'idLote' })
    lote?: Lote;
}
