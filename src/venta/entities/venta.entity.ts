import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Turno } from '../../turno/entities/turno.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { PagoVenta } from '../../pago-venta/entities/pago-venta.entity';
import { DetalleVenta } from '../../detalle-venta/entities/detalle-venta.entity';
import { MovimientoCuentaCorriente } from '../../movimiento-cuenta-corriente/entities/movimiento-cuenta-corriente.entity';

@Entity('ventas')
export class Venta {
    @PrimaryGeneratedColumn()
    idVenta!: number;

    @Column({ type: 'date' })
    fecha!: string;

    @Column({ type: 'time' })
    hora!: string;

    @Column({ type: 'int' })
    idTurno!: number;

    @Column({ type: 'int' })
    idUsuario!: number;

    @Column({ type: 'int', nullable: true })
    idCliente?: number;

    @Column({
        type: 'decimal', precision: 10, scale: 2, transformer: {
            to: (value: number) => value,
            from: (value: string) => parseFloat(value),
        },
    })
    total!: number;

    @Column({
        type: 'decimal', precision: 10, scale: 2, default: 0, transformer: {
            to: (value: number) => value,
            from: (value: string) => parseFloat(value),
        },
    })
    montoRedondeo!: number;

    @ManyToOne(() => Turno, (turno) => turno.ventas)
    @JoinColumn({ name: 'idTurno' })
    turno!: Turno;

    @ManyToOne(() => Usuario, (usuario) => usuario.ventas)
    @JoinColumn({ name: 'idUsuario' })
    usuario!: Usuario;

    @ManyToOne(() => Cliente, (cliente) => cliente.ventas, { nullable: true })
    @JoinColumn({ name: 'idCliente' })
    cliente?: Cliente;

    @OneToMany(() => PagoVenta, (pagoVenta) => pagoVenta.venta)
    pagosVenta!: PagoVenta[];

    @OneToMany(() => DetalleVenta, (detalleVenta) => detalleVenta.venta)
    detallesVenta!: DetalleVenta[];

    @OneToMany(() => MovimientoCuentaCorriente, (movimiento) => movimiento.venta)
    movimientosCuentaCorriente!: MovimientoCuentaCorriente[];
}