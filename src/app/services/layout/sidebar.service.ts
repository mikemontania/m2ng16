import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Pedidos',
      icono: 'fa fa-lg fa-fw fa-shopping-cart', excluir: '!ROLE_CONTADOR!ROLE_MKT',
      submenu: [
        { titulo: 'Nuevo pedido', url: '/pedidos', excluir: '!ROLE_CONTADOR' },
        { titulo: 'Listado de pedidos', url: '/pedidoLista', excluir: '!ROLE_CONTADOR' },
      ]
    },
    {
      titulo: 'Ventas',
      icono: 'mdi mdi-cash', excluir: '!ROLE_VENDEDOR!ROLE_MKT',
      submenu: [
        { titulo: 'Nueva venta', url: '/ventas', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR' },
        { titulo: 'Nuevo obsequio', url: '/obsequios', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR' },
        { titulo: 'Listado de ventas', url: '/ventasLista', excluir: '!ROLE_VENDEDOR' },
        { titulo: 'Listado de cobranzas', url: '/cobranzaLista', excluir: '!ROLE_VENDEDOR' },
        { titulo: 'Influencers', url: '/influencers', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR' },
      //  { titulo: 'Ventas por vendedor', url: '/reporteVendedores', excluir: '!ROLE_CONTADOR' }
      ]
    },

    // {
    //   titulo: 'Reparto',
    //   icono: 'fa fa-lg fa-fw fa-truck', excluir: '!ROLE_CONTADOR',
    //   submenu: [
    //     { titulo: 'Nuevo reparto', url: '/repartos', excluir: '!ROLE_CONTADOR' },
    //     { titulo: 'Listado de reparto', url: '/listaReparto', excluir: '!ROLE_CONTADOR' },
    //   ]
    // },
    
    {
      titulo: 'Canje',
      icono: 'fa fa-check-square-o', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_MKT',
      submenu: [
        { titulo: 'Nuevo canje', url: '/canjes', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR' },
        { titulo: 'Listado de canjes', url: '/canjeLista', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR' },
        { titulo: 'Historial de Puntos', url: '/historialPuntos', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR' },
         { titulo: 'Stock Premios', url: '/stockPremio', excluir: '!ROLE_CONTADOR ' },
         { titulo: 'Historial Premio', url: '/historialPremios', excluir: '!ROLE_CONTADOR ' },
      ]
    },
    {
      titulo: 'PROMO',
      // icono: 'mdi mdi-gauge',
      icono: 'fa fa-lg fa-fw fa-list', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_MKT',
      // icono: 'fa fa-lg fa-fw fa-cogs',
      submenu: [
        { titulo: 'Alianzas', url: '/alianzas', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Cupones', url: '/cupones', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR' },
      ]
    },
    {
      titulo: 'Parametros',
      // icono: 'mdi mdi-gauge',
      icono: 'fa fa-lg fa-fw fa-list', excluir: '!ROLE_CONTADOR!ROLE_MKT',
      // icono: 'fa fa-lg fa-fw fa-cogs',
      submenu: [
        { titulo: 'Alianzas', url: '/alianzas', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Bancos', url: '/bancos', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Bonificación', url: '/bonificaciones', excluir: '!ROLE_CONTADOR' },
        { titulo: 'Categoria Producto', url: '/categoria', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Clientes', url: '/clientes', excluir: '!ROLE_CONTADOR' },
        { titulo: 'Choferes', url: '/choferes', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Comprobantes', url: '/comprobantes', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Depositos', url: '/depositos', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Descuentos', url: '/descuentos', excluir: '!ROLE_CONTADOR' },
        { titulo: 'Forma venta', url: '/formaVenta', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Grupo descuento', url: '/grupoDescuento', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Grupo Material', url: '/grupoMaterial', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Lista Precio', url: '/listaPrecio', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Medio Pago', url: '/medioPago', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Motivo Anulacion', url: '/motivoAnulacion', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Precios', url: '/precios', excluir: '!ROLE_CONTADOR' },
        { titulo: 'Precios de Costo', url: '/preciosMateriales', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Premios', url: '/premios', excluir: '!ROLE_CONTADOR' },
        { titulo: 'Productos', url: '/productos', excluir: '!ROLE_CONTADOR' },
        { titulo: 'Puntos', url: '/puntos', excluir: '!ROLE_CONTADOR' },
        { titulo: 'Stock', url: '/stock', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Sucursales', url: '/sucursales', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Terminales', url: '/terminales', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Tipo Deposito', url: '/tipoDeposito', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Tipo Medio Pago', url: '/tipoMedioPago', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Unidad de Media', url: '/unidadMedida', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Vehiculos', url: '/vehiculos', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Vendedores', url: '/vendedores', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
      ]
    },
    {
      titulo: 'Configuración',
      // icono: 'mdi mdi-gauge',
      icono: 'fa fa-lg fa-fw fa-cogs', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP!ROLE_MKT',
      submenu: [
        { titulo: 'Usuarios', url: '/usuarios', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Empresas', url: '/empresas', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },

      ]
    },
    {
      titulo: 'Parametros abi',
      // icono: 'mdi mdi-gauge',
      icono: 'fa fa-lg fa-fw fa-list', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP!ROLE_MKT',
      // icono: 'fa fa-lg fa-fw fa-cogs',
      submenu: [
        { titulo: 'Productos', url: '/abi-productos', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Precios', url: '/abi-precios', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Punto Retiro', url: '/abi-puntosRetiro', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },
        { titulo: 'Stock', url: '/abi-stock', excluir: '!ROLE_CONTADOR!ROLE_VENDEDOR!ROLE_CAJERO!CAJERO_SUP' },      
      ]
    },
    {
       titulo: 'Entradas',
       icono: 'mdi mdi-cash', excluir: 'ROLE_ADMIN!ROLE_MKT',
       submenu: [
         { titulo: 'Compra', url: '/compras', excluir: 'ROLE_ADMIN' },
         { titulo: 'Listado de compras', url: '/comprasLista', excluir: 'ROLE_ADMIN' },
         { titulo: 'Proveedores', url: '/proveedores', excluir: 'ROLE_ADMIN' },
         { titulo: 'Anulacion compra', url: '/motivoAnulacionCompra', excluir: 'ROLE_ADMIN' },
         { titulo: 'Motivo tansferencia', url: '/motivoTransferencia', excluir: 'ROLE_ADMIN' },
         { titulo: 'Transferencia', url: '/transferencias', excluir: 'ROLE_ADMIN' },
         { titulo: 'Listado de transferencias', url: '/transferenciaLista', excluir: 'ROLE_ADMIN' },
       ]
     }, 
  ];

  constructor() { }

}
