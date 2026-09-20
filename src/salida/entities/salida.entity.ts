import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { DetalleSalida } from '../../detalle-salida/entities/detalle-salida.entity';
import { CategoriaSalida } from './categoria-salida.enum';

@Entity('salidas')
export class Salida {
    @PrimaryGeneratedColumn()
    idSalida!: number;

    @Column({ type: 'date' })
    fecha!: string;

    @Column({ type: 'enum', enum: CategoriaSalida })
    categoria!: CategoriaSalida;

    @Column({ type: 'int' })
    idUsuario!: number;

    @Column({ type: 'text', nullable: true })
    observacion?: string;

    @ManyToOne(() => Usuario, (usuario) => usuario.salidas)
    @JoinColumn({ name: 'idUsuario' })
    usuario!: Usuario;

    @OneToMany(() => DetalleSalida, (detalleSalida) => detalleSalida.salida)
    detallesSalida!: DetalleSalida[];
}