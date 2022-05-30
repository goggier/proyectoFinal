import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modulos
import { SharedModule } from 'src/app/components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// componentes
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { alumnoFeatureKey, alumnoReducer } from './state/alumno.reducer';
import { AlumnosEffects } from './state/alumno.effects';


@NgModule({
  declarations: [
    ListaAlumnosComponent,
    AbmAlumnosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(alumnoFeatureKey, alumnoReducer),
    EffectsModule.forFeature([AlumnosEffects])
  ],
  exports: [
    ListaAlumnosComponent
  ]
})
export class AlumnosModule { }
