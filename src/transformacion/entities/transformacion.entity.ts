import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Producto } from '../../producto/entities/producto.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { DetalleTransformacion } from '../../detalle-transformacion/entities/detalle-transformacion.entity';

@Entity('transformaciones')
export class Transformacion {
    @PrimaryGeneratedColumn()
    idTransformacion!: number;

    @Column({ type: 'date' })
    fecha!: string;

    @Column({ type: 'varchar', length: 100 })
    idProductoResultante!: string;

    @Column({
        type: 'decimal', precision: 10, scale: 2, transformer: {
            to: (value: number) => value,
            from: (value: string) => parseFloat(value),
        },
    })
    cantidadProducida!: number;

    @Column({ type: 'int' })
    idUsuario!: number;

    @ManyToOne(() => Producto, (producto) => producto.transformacionesComoResultante)
    @JoinColumn({ name: 'idProductoResultante' })
    productoResultante!: Producto;

    @ManyToOne(() => Usuario, (usuario) => usuario.transformaciones)
    @JoinColumn({ name: 'idUsuario' })
    usuario!: Usuario;

    @OneToMany(() => DetalleTransformacion, (detalleTransformacion) => detalleTransformacion.transformacion)
    detallesTransformacion!: DetalleTransformacion[];
}
