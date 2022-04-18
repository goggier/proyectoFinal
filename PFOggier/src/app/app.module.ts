import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material/angular-material/angular-material.module';
import { AdminModule } from './components/admin/admin.module';

//COMPONENTES ANGULAR
import { AdminComponent } from './components/admin/admin.component';
import { AlumnoService } from './services/alumno.service';
import { AlertaService } from './services/alerta.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AlumnoService, AlertaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
