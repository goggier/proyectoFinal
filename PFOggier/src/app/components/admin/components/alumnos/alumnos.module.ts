import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modulos
import { SharedModule } from 'src/app/components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// componentes
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';


@NgModule({
  declarations: [
    ListaAlumnosComponent,
    AbmAlumnosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ListaAlumnosComponent
  ]
})
export class AlumnosModule { }
