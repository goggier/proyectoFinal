import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

//MATERIAL
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { AbmAlumnosComponent } from './components/abm-alumnos/abm-alumnos.component';
// FORMS AND REACTIVE FORMS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';

// MODULOS
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    AdminComponent,
    LayoutComponent,
    SidenavComponent,
    ToolbarComponent,
    ListaAlumnosComponent,
    AbmAlumnosComponent,
    ListaCursosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class AdminModule { }
