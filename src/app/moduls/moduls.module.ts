import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import HeaderComponent from '../components/header/header.component';
import AlmacenComponent from './almacen/almacen.component';
import AmenidadesComponent from './amenidades/amenidades.component';
import AnunciosComponent from './anuncios/anuncios.component';
import BitacorasComponent from './bitacoras/bitacoras.component';
import CalendarioComponent from './calendario/calendario.component';
import CatalogosComponent from './catalogos/catalogos.component';
import ComprasComponent from './compras/compras.component';
import DirectoriosComponent from './directorios/directorios.component';
import DocumentosBibliotecaComponent from './documentos-biblioteca/documentos-biblioteca.component';
import DocumentosComponent from './documentos/documentos.component';
import InspeccionesComponent from './inspecciones/inspecciones.component';
import InventariosComponent from './inventarios/inventarios.component';
import JuntasComponent from './juntas/juntas.component';
import MiPropiedadComponent from './mi-propiedad/mi-propiedad.component';
import MudanzaComponent from './mudanza/mudanza.component';
import PasesQrComponent from './pases-qr/pases-qr.component';
import PermisosIngresoComponent from './permisos-ingreso/permisos-ingreso.component';
import ReglamentosComponent from './reglamentos/reglamentos.component';
import ReportesComponent from './reportes/reportes.component';
import RrhhComponent from './rrhh/rrhh.component';
import TicketsComponent from './tickets/tickets.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,

    FooterComponent,
    HeaderComponent,

    AlmacenComponent,
    AmenidadesComponent,
    AnunciosComponent,
    BitacorasComponent,
    CalendarioComponent,
    CatalogosComponent,
    ComprasComponent,
    DirectoriosComponent,
    DocumentosBibliotecaComponent,
    DocumentosComponent,
    InspeccionesComponent,
    InventariosComponent,
    JuntasComponent,
    MiPropiedadComponent,
    MudanzaComponent,
    PasesQrComponent,
    PermisosIngresoComponent,
    ReglamentosComponent,
    ReportesComponent,
    RrhhComponent,
    TicketsComponent,
    UsuariosComponent,
  ],
  exports: [
    CommonModule,
    RouterModule,

    FooterComponent,
    HeaderComponent,

    AlmacenComponent,
    AmenidadesComponent,
    AnunciosComponent,
    BitacorasComponent,
    CalendarioComponent,
    CatalogosComponent,
    ComprasComponent,
    DirectoriosComponent,
    DocumentosBibliotecaComponent,
    DocumentosComponent,
    InspeccionesComponent,
    InventariosComponent,
    JuntasComponent,
    MiPropiedadComponent,
    MudanzaComponent,
    PasesQrComponent,
    PermisosIngresoComponent,
    ReglamentosComponent,
    ReportesComponent,
    RrhhComponent,
    TicketsComponent,
    UsuariosComponent,
  ],
})
export class ModulsModule {}
