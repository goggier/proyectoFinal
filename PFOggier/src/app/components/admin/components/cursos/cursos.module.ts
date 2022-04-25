import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MODULOS
import { SharedModule } from 'src/app/components/shared/shared.module';
import { AbmCursosComponent } from './abm-cursos/abm-cursos.component';



@NgModule({
  declarations: [
    ListaCursosComponent,
    AbmCursosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ListaCursosComponent
  ]
})
export class CursosModule { }
