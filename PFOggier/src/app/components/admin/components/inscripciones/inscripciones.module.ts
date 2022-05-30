import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaIncripcionesComponent } from './lista-incripciones/lista-incripciones.component';
import { AbmIncripcionesComponent } from './abm-incripciones/abm-incripciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { inscripcionesFeatureKey, inscripcionesReducer } from './state/inscripcion.reducer';
import { InscripcionesEffects } from './state/inscripcion.effects';
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
    SharedModule,
    StoreModule.forFeature(inscripcionesFeatureKey, inscripcionesReducer),
    EffectsModule.forFeature([InscripcionesEffects])
  ],
  exports: [
    ListaIncripcionesComponent
  ]
})
export class InscripcionesModule { }
