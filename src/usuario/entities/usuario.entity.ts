import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RolUsuario } from './usuario-rol.enum';
import { Turno } from '../../turno/entities/turno.entity';
import { TurnoUsuario } from '../../turno-usuario/entities/turno-usuario.entity';
import { Venta } from '../../venta/entities/venta.entity';
import { Salida } from '../../salida/entities/salida.entity';
import { Transformacion } from '../../transformacion/entities/transformacion.entity';
import { Exclude } from 'class-transformer';

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn()
    idUsuario!: number;

    @Column({ type: 'varchar', length: 100 })
    nombre!: string;

    @Column({ type: 'varchar', length: 100 })
    apellido!: string;

    @Column({ type: 'varchar', unique: true, length: 150 })
    email!: string;

    @Column({ type: 'varchar', select: false })
    @Exclude()
    contrasena!: string;

    @Column({
        type: 'enum',
        enum: RolUsuario,
        default: RolUsuario.EMPLEADO,
    })
    rol!: RolUsuario;

    @Column({ type: 'boolean', default: true })
    activo!: boolean;

    @OneToMany(() => Turno, (turno) => turno.usuario)
    turnos!: Turno[];

    @OneToMany(() => TurnoUsuario, (turnoUsuario) => turnoUsuario.usuario)
    turnosUsuarios!: TurnoUsuario[];

    @OneToMany(() => Venta, (venta) => venta.usuario)
    ventas!: Venta[];

    @OneToMany(() => Salida, (salida) => salida.usuario)
    salidas!: Salida[];

    @OneToMany(() => Transformacion, (transformacion) => transformacion.usuario)
    transformaciones!: Transformacion[];
}