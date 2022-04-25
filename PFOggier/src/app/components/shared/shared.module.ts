import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormatoNombreApellidoPipe } from './pipes/formato-nombre-apellido.pipe';
import { SizeCabecerasDirective } from './directivas/size-cabeceras.directive';



@NgModule({
  declarations: [
    FormatoNombreApellidoPipe,
    SizeCabecerasDirective
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    AngularMaterialModule,
    FormatoNombreApellidoPipe,
    SizeCabecerasDirective
  ]
})
export class SharedModule { }
