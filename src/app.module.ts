import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { VentaModule } from './venta/venta.module';
import { MetodoPagoModule } from './metodo-pago/metodo-pago.module';
import { CuentaDestinoModule } from './cuenta-destino/cuenta-destino.module';
import { DetalleVentaModule } from './detalle-venta/detalle-venta.module';
import { PromocionModule } from './promocion/promocion.module';
import { PromocionProductoModule } from './promocion-producto/promocion-producto.module';
import { ClienteModule } from './cliente/cliente.module';
import { MovimientoCuentaCorrienteModule } from './movimiento-cuenta-corriente/movimiento-cuenta-corriente.module';
import { ProductoModule } from './producto/producto.module';
import { MarcaModule } from './marca/marca.module';
import { CategoriaModule } from './categoria/categoria.module';
import { TurnoModule } from './turno/turno.module';
import { TurnoUsuarioModule } from './turno-usuario/turno-usuario.module';
import { ProductoProveedorModule } from './producto-proveedor/producto-proveedor.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { EntradaModule } from './entrada/entrada.module';
import { DetalleEntradaModule } from './detalle-entrada/detalle-entrada.module';
import { LoteModule } from './lote/lote.module';
import { SalidaModule } from './salida/salida.module';
import { DetalleSalidaModule } from './detalle-salida/detalle-salida.module';
import { TransformacionModule } from './transformacion/transformacion.module';
import { DetalleTransformacionModule } from './detalle-transformacion/detalle-transformacion.module';
import { NotificacionModule } from './notificacion/notificacion.module';
import { PagoVentaModule } from './pago-venta/pago-venta.module';

@Module({
  imports: [UsuarioModule, VentaModule, MetodoPagoModule, CuentaDestinoModule, DetalleVentaModule, PromocionModule, PromocionProductoModule, ClienteModule, MovimientoCuentaCorrienteModule, ProductoModule, MarcaModule, CategoriaModule, TurnoModule, TurnoUsuarioModule, ProductoProveedorModule, ProveedorModule, EntradaModule, DetalleEntradaModule, LoteModule, SalidaModule, DetalleSalidaModule, TransformacionModule, DetalleTransformacionModule, NotificacionModule, PagoVentaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
