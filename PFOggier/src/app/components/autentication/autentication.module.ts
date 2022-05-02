import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//MATERIAL
// FORMS AND REACTIVE FORMS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MODULOS
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

import { AutenticationRoutingModule } from './autentication-routing.module';
import { AutenticationComponent } from './autentication/autentication.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AutenticationComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AutenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule
  ],
  providers:[SharedModule]
})
export class AutenticationModule { }
