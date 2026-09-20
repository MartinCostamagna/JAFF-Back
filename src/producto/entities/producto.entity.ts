import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { UnidadMedida } from './unidad-medida.enum';
import { Marca } from '../../marca/entities/marca.entity';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { DetalleVenta } from '../../detalle-venta/entities/detalle-venta.entity';
import { PromocionProducto } from '../../promocion-producto/entities/promocion-producto.entity';
import { ProductoProveedor } from '../../producto-proveedor/entities/producto-proveedor.entity';
import { DetalleEntrada } from '../../detalle-entrada/entities/detalle-entrada.entity';
import { Lote } from '../../lote/entities/lote.entity';
import { DetalleSalida } from '../../detalle-salida/entities/detalle-salida.entity';
import { Transformacion } from '../../transformacion/entities/transformacion.entity';
import { DetalleTransformacion } from '../../detalle-transformacion/entities/detalle-transformacion.entity';
import { Notificacion } from '../../notificacion/entities/notificacion.entity';

@Entity('productos')
export class Producto {
    @PrimaryColumn({ type: 'varchar', length: 100 })
    codigoDeBarras!: string;

    @Column({ type: 'varchar', length: 255 })
    descripcion!: string;

    @Column({
        type: 'decimal', precision: 10, scale: 2, transformer: {
            to: (value: number) => value,
            from: (value: string) => parseFloat(value),
        },
    })
    porcentajeGanancia!: number;

    @Column({
        type: 'decimal', precision: 10, scale: 2, transformer: {
            to: (value: number) => value,
            from: (value: string) => parseFloat(value),
        },
    })
    precioVenta!: number;

    @Column({ type: 'enum', enum: UnidadMedida })
    unidadMedida!: UnidadMedida;

    @Column({
        type: 'decimal', precision: 10, scale: 2, transformer: {
            to: (value: number) => value,
            from: (value: string) => parseFloat(value),
        },
    })
    stock!: number;

    @Column({
        type: 'decimal', precision: 10, scale: 2, transformer: {
            to: (value: number) => value,
            from: (value: string) => parseFloat(value),
        },
    })
    stockMinimo!: number;

    @Column({ type: 'boolean', default: false })
    esElaborado!: boolean;

    @ManyToOne(() => Marca, (marca) => marca.productos)
    @JoinColumn({ name: 'idMarca' })
    marca!: Marca;

    @ManyToOne(() => Categoria, (categoria) => categoria.productos)
    @JoinColumn({ name: 'idCategoria' })
    categoria!: Categoria;

    @OneToMany(() => DetalleVenta, (detalleVenta) => detalleVenta.producto)
    detallesVenta!: DetalleVenta[];

    @OneToMany(() => PromocionProducto, (promocionProducto) => promocionProducto.producto)
    promocionesProducto!: PromocionProducto[];

    @OneToMany(() => ProductoProveedor, (productoProveedor) => productoProveedor.producto)
    productosProveedor!: ProductoProveedor[];

    @OneToMany(() => DetalleEntrada, (detalleEntrada) => detalleEntrada.producto)
    detallesEntrada!: DetalleEntrada[];

    @OneToMany(() => Lote, (lote) => lote.producto)
    lotes!: Lote[];

    @OneToMany(() => DetalleSalida, (detalleSalida) => detalleSalida.producto)
    detallesSalida!: DetalleSalida[];

    @OneToMany(() => Transformacion, (transformacion) => transformacion.productoResultante)
    transformacionesComoResultante!: Transformacion[];

    @OneToMany(() => DetalleTransformacion, (detalleTransformacion) => detalleTransformacion.producto)
    detallesTransformacion!: DetalleTransformacion[];

    @OneToMany(() => Notificacion, (notificacion) => notificacion.producto)
    notificaciones!: Notificacion[];
}
