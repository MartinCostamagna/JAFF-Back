import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { Venta } from '../../venta/entities/venta.entity';
import { TipoMovimiento } from './tipo-movimiento.enum';

@Entity('movimientos_cuenta_corriente')
export class MovimientoCuentaCorriente {
    @PrimaryGeneratedColumn()
    idMovimiento!: number;

    @Column({ type: 'date' })
    fecha!: string;

    @Column({
        type: 'enum',
        enum: TipoMovimiento,
    })
    tipo!: TipoMovimiento;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    monto!: number;

    @Column({ type: 'int' })
    idCliente!: number;

    @Column({ type: 'int', nullable: true })
    idVenta?: number;

    @ManyToOne(() => Cliente, (cliente) => cliente.movimientosCuentaCorriente)
    @JoinColumn({ name: 'idCliente' })
    cliente!: Cliente;

    @ManyToOne(() => Venta, (venta) => venta.movimientosCuentaCorriente, { nullable: true })
    @JoinColumn({ name: 'idVenta' })
    venta?: Venta;
}
