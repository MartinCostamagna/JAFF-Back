import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Venta } from '../../venta/entities/venta.entity';
import { MovimientoCuentaCorriente } from '../../movimiento-cuenta-corriente/entities/movimiento-cuenta-corriente.entity';

@Entity('clientes')
export class Cliente {
    @PrimaryGeneratedColumn()
    idCliente!: number;

    @Column({ type: 'varchar', length: 150 })
    nombre!: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    saldoActual!: number;

    @OneToMany(() => Venta, (venta) => venta.cliente)
    ventas!: Venta[];

    @OneToMany(() => MovimientoCuentaCorriente, (movimiento) => movimiento.cliente)
    movimientosCuentaCorriente!: MovimientoCuentaCorriente[];
}
