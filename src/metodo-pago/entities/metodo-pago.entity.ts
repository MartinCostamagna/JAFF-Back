import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PagoVenta } from '../../pago-venta/entities/pago-venta.entity';

@Entity('metodos_pago')
export class MetodoPago {
    @PrimaryGeneratedColumn()
    idMetodoPago!: number;

    @Column({ type: 'varchar', length: 100 })
    nombre!: string;

    @OneToMany(() => PagoVenta, (pagoVenta) => pagoVenta.metodoPago)
    pagosVenta!: PagoVenta[];
}