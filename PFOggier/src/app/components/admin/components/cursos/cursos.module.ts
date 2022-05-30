import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// MODULOS
import { SharedModule } from 'src/app/components/shared/shared.module';
import { AbmCursosComponent } from './abm-cursos/abm-cursos.component';
import { cursoFeatureKey, cursoReducer } from './state/curso.reducer';
import { CursoEffects } from './state/curso.effects';



@NgModule({
  declarations: [
    ListaCursosComponent,
    AbmCursosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(cursoFeatureKey, cursoReducer),
    EffectsModule.forFeature([CursoEffects])
  ],
  exports: [
    ListaCursosComponent
  ]
})
export class CursosModule { }
