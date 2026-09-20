import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Entrada } from '../../entrada/entities/entrada.entity';
import { Producto } from '../../producto/entities/producto.entity';
import { Lote } from '../../lote/entities/lote.entity';

@Entity('detalles_entrada')
export class DetalleEntrada {
    @PrimaryGeneratedColumn()
    idDetalleEntrada!: number;

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
    precioCosto!: number;

    @Column({ type: 'int' })
    idEntrada!: number;

    @Column({ type: 'varchar', length: 100 })
    idProducto!: string;

    @ManyToOne(() => Entrada, (entrada) => entrada.detallesEntrada)
    @JoinColumn({ name: 'idEntrada' })
    entrada!: Entrada;

    @ManyToOne(() => Producto, (producto) => producto.detallesEntrada)
    @JoinColumn({ name: 'idProducto' })
    producto!: Producto;

    @OneToMany(() => Lote, (lote) => lote.detalleEntrada)
    lotes!: Lote[];
}
