import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectorAuth } from 'src/app/components/autentication/login/state/login.selector';
import { Usuario } from 'src/app/components/core/interfaces/Usuario.interface';
import { AuthService } from 'src/app/components/core/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() isHandset$: any;
  @Input() drawer: any;
  usuario: Usuario = {
    apellido: '',
    celular: '',
    dni: 0,
    email: '',
    fechaIngreso: '',
    id: 0,
    nombre: '',
    password: '',
    rol: '',
    username: ''
  };

  constructor(private authService: AuthService, private router: Router, private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectorAuth).subscribe((state)=>{
      this.usuario = state.usuarioActivo;
      console.log(this.usuario);
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  leerUsuario() {
    return `Bienvenido ${this.usuario.nombre} - ${this.usuario.apellido}`
  }

}
