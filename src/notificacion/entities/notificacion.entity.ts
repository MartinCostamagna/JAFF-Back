import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Producto } from '../../producto/entities/producto.entity';
import { Lote } from '../../lote/entities/lote.entity';
import { TipoNotificacion } from './tipo-notificacion.enum';

@Entity('notificaciones')
export class Notificacion {
    @PrimaryGeneratedColumn()
    idNotificacion!: number;

    @Column({ type: 'varchar', length: 255 })
    mensaje!: string;

    @Column({ type: 'timestamp' })
    fechaYHora!: Date;

    @Column({ type: 'enum', enum: TipoNotificacion, length: 100 })
    tipo!: TipoNotificacion;

    @Column({ type: 'varchar', length: 100 })
    idProducto!: string;

    @Column({ type: 'int', nullable: true })
    idLote?: number;

    @Column({ type: 'boolean', default: false })
    leida!: boolean;

    @ManyToOne(() => Producto, (producto) => producto.notificaciones)
    @JoinColumn({ name: 'idProducto' })
    producto!: Producto;

    @ManyToOne(() => Lote, (lote) => lote.notificaciones, { nullable: true })
    @JoinColumn({ name: 'idLote' })
    lote?: Lote;
}