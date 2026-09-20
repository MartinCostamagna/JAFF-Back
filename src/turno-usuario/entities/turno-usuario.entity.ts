import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Turno } from '../../turno/entities/turno.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity('turnos_usuarios')
export class TurnoUsuario {
    @PrimaryGeneratedColumn()
    idTurnoUsuario!: number;

    @Column({ type: 'int' })
    idTurno!: number;

    @Column({ type: 'int' })
    idUsuario!: number;

    @Column({ type: 'date' })
    fechaEntrada!: string;

    @Column({ type: 'date', nullable: true })
    fechaSalida!: string;

    @Column({ type: 'time' })
    horaEntrada!: string;

    @Column({ type: 'time', nullable: true })
    horaSalida!: string;

    @ManyToOne(() => Turno, (turno) => turno.turnosUsuarios)
    @JoinColumn({ name: 'idTurno' })
    turno!: Turno;

    @ManyToOne(() => Usuario, (usuario) => usuario.turnosUsuarios)
    @JoinColumn({ name: 'idUsuario' })
    usuario!: Usuario;
}
