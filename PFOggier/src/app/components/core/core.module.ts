import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoService } from './services/alumno.service';
import { AlertaService } from './services/alerta.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [

  ],
  providers: [AlumnoService, AlertaService],
})
export class CoreModule { }
