import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { DetalleEntrada } from '../../detalle-entrada/entities/detalle-entrada.entity';
import { Producto } from '../../producto/entities/producto.entity';
import { DetalleSalida } from '../../detalle-salida/entities/detalle-salida.entity';
import { DetalleTransformacion } from '../../detalle-transformacion/entities/detalle-transformacion.entity';
import { Notificacion } from '../../notificacion/entities/notificacion.entity';

@Entity('lotes')
export class Lote {
    @PrimaryGeneratedColumn()
    idLote!: number;

    @Column({ type: 'int' })
    idDetalleEntrada!: number;

    @Column({ type: 'varchar', length: 100 })
    idProducto!: string;

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
    cantidadDisponible!: number;

    @Column({ type: 'date' })
    fechaVencimiento!: string;

    @ManyToOne(() => DetalleEntrada, (detalleEntrada) => detalleEntrada.lotes)
    @JoinColumn({ name: 'idDetalleEntrada' })
    detalleEntrada!: DetalleEntrada;

    @ManyToOne(() => Producto, (producto) => producto.lotes)
    @JoinColumn({ name: 'idProducto' })
    producto!: Producto;

    @OneToMany(() => DetalleSalida, (detalleSalida) => detalleSalida.lote)
    detallesSalida!: DetalleSalida[];

    @OneToMany(() => DetalleTransformacion, (detalleTransformacion) => detalleTransformacion.lote)
    detallesTransformacion!: DetalleTransformacion[];

    @OneToMany(() => Notificacion, (notificacion) => notificacion.lote)
    notificaciones!: Notificacion[];
}
