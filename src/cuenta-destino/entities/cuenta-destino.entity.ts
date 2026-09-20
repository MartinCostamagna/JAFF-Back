import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PagoVenta } from '../../pago-venta/entities/pago-venta.entity';

@Entity('cuentas_destino')
export class CuentaDestino {
    @PrimaryGeneratedColumn()
    idCuentaDestino!: number;

    @Column({ type: 'varchar', length: 150 })
    nombre!: string;

    @Column({ type: 'boolean', default: true })
    activa!: boolean;

    @OneToMany(() => PagoVenta, (pagoVenta) => pagoVenta.cuentaDestino)
    pagosVenta!: PagoVenta[];
}
