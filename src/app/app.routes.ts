import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'menu',
    loadComponent: () => import('./components/menu/menu.component'),
  },
  {
    path: 'menu',
    title: 'menu',
    loadComponent: () => import('./components/menu/menu.component'),
  },
  {
    path: 'administrador',
    title: 'administrador',
    loadComponent: () =>
      import('./pages/administrador/administrador.component'),
  },
  {
    path: 'asistente',
    title: 'asistente',
    loadComponent: () => import('./pages/asistente/asistente.component'),
  },
  {
    path: 'colaborador',
    title: 'colaborador',
    loadComponent: () => import('./pages/colaborador/colaborador.component'),
  },
  {
    path: 'colaborador-externo',
    title: 'colaborador-externo',
    loadComponent: () =>
      import('./pages/colaborador-externo/colaborador-externo.component'),
  },
  {
    path: 'condomino',
    title: 'condomino',
    loadComponent: () => import('./pages/condomino/condomino.component'),
  },
  {
    path: 'jefe-mantenimiento',
    title: 'jefe-mantenimiento',
    loadComponent: () =>
      import('./pages/jefe-mantenimiento/jefe-mantenimiento.component'),
  },
  {
    path: 'super-user',
    title: 'super-user',
    loadComponent: () => import('./pages/super-user/super-user.component'),
  },
  {
    path: 'supervisor',
    title: 'supervisor',
    loadComponent: () => import('./pages/supervisor/supervisor.component'),
  },

  //pages views

  {
    path: 'almacen',
    title: 'almacen',
    loadComponent: () =>
      import('./moduls/almacen/almacen-view/almacen-view.component'),
  },
  {
    path: 'anuncios',
    title: 'anuncios',
    loadComponent: () =>
      import('./moduls/anuncios/anuncios-view/anuncios-view.component'),
  },
  {
    path: 'amenidades',
    title: 'amenidades',
    loadComponent: () =>
      import('./moduls/amenidades/amenidades-view/amenidades-view.component'),
  },
  {
    path: 'bitacoras',
    title: 'bitacoras',
    loadComponent: () =>
      import('./moduls/bitacoras/bitacoras-view/bitacoras-view.component'),
  },
  {
    path: 'calendario',
    title: 'calendario',
    loadComponent: () =>
      import('./moduls/calendario/calendario-view/calendario-view.component'),
  },
  {
    path: 'catalogos',
    title: 'catalogos',
    loadComponent: () =>
      import('./moduls/catalogos/catalogos-view/catalogos-view.component'),
  },
  {
    path: 'compras',
    title: 'compras',
    loadComponent: () =>
      import('./moduls/compras/compras-view/compras-view.component'),
  },
  {
    path: 'directorios',
    title: 'directorios',
    loadComponent: () =>
      import(
        './moduls/directorios/directorios-view/directorios-view.component'
      ),
  },
  {
    path: 'documentos',
    title: 'documentos',
    loadComponent: () =>
      import('./moduls/documentos/documentos-view/documentos-view.component'),
  },
  {
    path: 'documentos-biblioteca',
    title: 'documentos-biblioteca',
    loadComponent: () =>
      import(
        './moduls/documentos-biblioteca/documentos-biblioteca-view/documentos-biblioteca-view.component'
      ),
  },
  {
    path: 'inspecciones',
    title: 'inspecciones',
    loadComponent: () =>
      import(
        './moduls/inspecciones/inspecciones-view/inspecciones-view.component'
      ),
  },
  {
    path: 'inventarios',
    title: 'inventarios',
    loadComponent: () =>
      import(
        './moduls/inventarios/inventarios-view/inventarios-view.component'
      ),
  },
  {
    path: 'juntas',
    title: 'juntas',
    loadComponent: () =>
      import('./moduls/juntas/juntas-view/juntas-view.component'),
  },
  {
    path: 'mi-propiedad',
    title: 'mi-propiedad',
    loadComponent: () =>
      import(
        './moduls/mi-propiedad/mi-propiedad-view/mi-propiedad-view.component'
      ),
  },
  {
    path: 'mudanza',
    title: 'mudanza',
    loadComponent: () =>
      import('./moduls/mudanza/mudanza-view/mudanza-view.component'),
  },
  {
    path: 'pases-qr',
    title: 'pases-qr',
    loadComponent: () =>
      import('./moduls/pases-qr/pases-qr-view/pases-qr-view.component'),
  },
  {
    path: 'permisos-ingreso',
    title: 'permisos-ingreso',
    loadComponent: () =>
      import(
        './moduls/permisos-ingreso/permisos-ingreso-view/permisos-ingreso-view.component'
      ),
  },
  {
    path: 'reglamentos',
    title: 'reglamentos',
    loadComponent: () =>
      import(
        './moduls/reglamentos/reglamentos-view/reglamentos-view.component'
      ),
  },
  {
    path: 'reportes',
    title: 'reportes',
    loadComponent: () =>
      import('./moduls/reportes/reportes-view/reportes-view.component'),
  },
  {
    path: 'rrhh',
    title: 'rrhh',
    loadComponent: () => import('./moduls/rrhh/rrhh-view/rrhh-view.component'),
  },
  {
    path: 'tickets',
    title: 'tickets',
    loadComponent: () =>
      import('./moduls/tickets/tickets-view/tickets-view.component'),
  },
  {
    path: 'usuarios',
    title: 'usuarios',
    loadComponent: () =>
      import('./moduls/usuarios/usuarios-view/usuarios-view.component'),
  },
  {
    path: 'notification',
    title: 'notification',
    loadComponent: () => import('./moduls/notification/notification.component'),
  },
];
