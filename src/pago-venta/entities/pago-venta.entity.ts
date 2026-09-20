import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Venta } from '../../venta/entities/venta.entity';
import { MetodoPago } from '../../metodo-pago/entities/metodo-pago.entity';
import { CuentaDestino } from '../../cuenta-destino/entities/cuenta-destino.entity';

@Entity('pagos_venta')
export class PagoVenta {
    @PrimaryGeneratedColumn()
    idPagoVenta!: number;

    @Column({ type: 'int' })
    idVenta!: number;

    @Column({ type: 'int' })
    idMetodoPago!: number;

    @Column({ type: 'int' })
    idCuentaDestino!: number;

    @Column({
        type: 'decimal', precision: 10, scale: 2, transformer: {
            to: (value: number) => value,
            from: (value: string) => parseFloat(value),
        },
    })
    monto!: number;

    @ManyToOne(() => Venta, (venta) => venta.pagosVenta)
    @JoinColumn({ name: 'idVenta' })
    venta!: Venta;

    @ManyToOne(() => MetodoPago, (metodoPago) => metodoPago.pagosVenta)
    @JoinColumn({ name: 'idMetodoPago' })
    metodoPago!: MetodoPago;

    @ManyToOne(() => CuentaDestino, (cuentaDestino) => cuentaDestino.pagosVenta)
    @JoinColumn({ name: 'idCuentaDestino' })
    cuentaDestino!: CuentaDestino;
}
