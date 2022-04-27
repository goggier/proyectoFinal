import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ListaAlumnosComponent } from './components/alumnos/lista-alumnos/lista-alumnos.component';
import { ListaCursosComponent } from './components/cursos/lista-cursos/lista-cursos.component';
import { ListaIncripcionesComponent } from './components/inscripciones/lista-incripciones/lista-incripciones.component';

const routes: Routes = [
  { path: '',
    component: AdminComponent,
    children: [
      { path: 'alumnos', component: ListaAlumnosComponent },
      { path: 'cursos', component: ListaCursosComponent},
      { path: 'inscripciones', component: ListaIncripcionesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
