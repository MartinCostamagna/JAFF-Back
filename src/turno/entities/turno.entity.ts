import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { TurnoUsuario } from '../../turno-usuario/entities/turno-usuario.entity';
import { Venta } from '../../venta/entities/venta.entity';
import { EstadoTurno } from './estado-turno.enum';

@Entity('turnos')
export class Turno {
    @PrimaryGeneratedColumn()
    idTurno!: number;

    @Column({ type: 'date' })
    fechaInicio!: string;

    @Column({ type: 'date', nullable: true })
    fechaFin!: string;

    @Column({ type: 'time' })
    horaInicio!: string;

    @Column({ type: 'time', nullable: true })
    horaFin!: string;

    @Column({ type: 'int' })
    idUsuario!: number;

    @Column({ type: 'enum', enum: EstadoTurno, default: EstadoTurno.ABIERTO })
    estado!: EstadoTurno;

    @Column({
        type: 'decimal', precision: 10, scale: 2, transformer: {
            to: (value: number) => value,
            from: (value: string) => parseFloat(value),
        },
    })
    montoEfectivoContado!: number;

    @Column({
        type: 'decimal', precision: 10, scale: 2, transformer: {
            to: (value: number) => value,
            from: (value: string) => parseFloat(value),
        },
    })
    montoEfectivoEsperado!: number;

    @Column({
        type: 'decimal', precision: 10, scale: 2, transformer: {
            to: (value: number) => value,
            from: (value: string) => parseFloat(value),
        },
    })
    diferencia!: number;

    @ManyToOne(() => Usuario, (usuario) => usuario.turnos)
    @JoinColumn({ name: 'idUsuario' })
    usuario!: Usuario;

    @OneToMany(() => TurnoUsuario, (turnoUsuario) => turnoUsuario.turno)
    turnosUsuarios!: TurnoUsuario[];

    @OneToMany(() => Venta, (venta) => venta.turno)
    ventas!: Venta[];
}