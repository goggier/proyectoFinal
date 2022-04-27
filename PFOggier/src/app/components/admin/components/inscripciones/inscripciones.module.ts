import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaIncripcionesComponent } from './lista-incripciones/lista-incripciones.component';
import { AbmIncripcionesComponent } from './abm-incripciones/abm-incripciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared/shared.module';

// MODULOS




@NgModule({
  declarations: [
    ListaIncripcionesComponent,
    AbmIncripcionesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ListaIncripcionesComponent
  ]
})
export class InscripcionesModule { }
