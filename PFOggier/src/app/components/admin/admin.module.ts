import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

//MATERIAL
// FORMS AND REACTIVE FORMS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ListaCursosComponent } from './components/cursos/lista-cursos/lista-cursos.component';

// MODULOS
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { CursosModule } from './components/cursos/cursos.module';
import { AlumnosModule } from './components/alumnos/alumnos.module';
import { InscripcionesModule } from './components/inscripciones/inscripciones.module';


@NgModule({
  declarations: [
    AdminComponent,
    LayoutComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    CoreModule,
    CursosModule,
    InscripcionesModule,
    AlumnosModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class AdminModule { }
