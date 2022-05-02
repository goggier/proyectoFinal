import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/core/guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/autentication/autentication.module').then(m => m.AutenticationModule) },
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard] },
  //{path: '', redirectTo: 'autentication', pathMatch: "full"}
  // {path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
