import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

//MATERIAL
import { AngularMaterialModule } from '../../material/angular-material/angular-material.module';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { AbmAlumnosComponent } from './components/abm-alumnos/abm-alumnos.component';
// FORMS AND REACTIVE FORMS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatoNombreApellidoPipe } from './shared/pipes/formato-nombre-apellido.pipe';
import { SizeCabecerasDirective } from './shared/directivas/size-cabeceras.directive';


@NgModule({
  declarations: [
    AdminComponent,
    LayoutComponent,
    SidenavComponent,
    ToolbarComponent,
    ListaAlumnosComponent,
    AbmAlumnosComponent,
    FormatoNombreApellidoPipe,
    SizeCabecerasDirective
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class AdminModule { }
