import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Salida } from '../../salida/entities/salida.entity';
import { Producto } from '../../producto/entities/producto.entity';
import { Lote } from '../../lote/entities/lote.entity';

@Entity('detalles_salida')
export class DetalleSalida {
    @PrimaryGeneratedColumn()
    idDetalleSalida!: number;

    @Column({
        type: 'decimal', precision: 10, scale: 2, transformer: {
            to: (value: number) => value,
            from: (value: string) => parseFloat(value),
        },
    })
    cantidad!: number;

    @Column({ type: 'int' })
    idSalida!: number;

    @Column({ type: 'varchar', length: 100 })
    idProducto!: string;

    @Column({ type: 'int', nullable: true })
    idLote?: number;

    @ManyToOne(() => Salida, (salida) => salida.detallesSalida)
    @JoinColumn({ name: 'idSalida' })
    salida!: Salida;

    @ManyToOne(() => Producto, (producto) => producto.detallesSalida)
    @JoinColumn({ name: 'idProducto' })
    producto!: Producto;

    @ManyToOne(() => Lote, (lote) => lote.detallesSalida, { nullable: true })
    @JoinColumn({ name: 'idLote' })
    lote?: Lote;
}
