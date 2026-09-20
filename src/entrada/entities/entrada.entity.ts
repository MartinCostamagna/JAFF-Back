import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Proveedor } from '../../proveedor/entities/proveedor.entity';
import { DetalleEntrada } from '../../detalle-entrada/entities/detalle-entrada.entity';

@Entity('entradas')
export class Entrada {
    @PrimaryGeneratedColumn()
    idEntrada!: number;

    @Column({ type: 'date' })
    fecha!: string;

    @Column({ type: 'int' })
    idProveedor!: number;

    @ManyToOne(() => Proveedor, (proveedor) => proveedor.entradas)
    @JoinColumn({ name: 'idProveedor' })
    proveedor!: Proveedor;

    @OneToMany(() => DetalleEntrada, (detalleEntrada) => detalleEntrada.entrada)
    detallesEntrada!: DetalleEntrada[];
}
