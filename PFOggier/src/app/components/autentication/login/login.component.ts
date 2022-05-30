import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from '../../core/interfaces/Usuario.interface';
import { AlertaService } from '../../core/services/alerta.service';
import { AuthService } from '../../core/services/auth.service';
import { cargarSesion } from './state/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;

  constructor(public form: FormBuilder,private authService: AuthService, private alertaService: AlertaService, private router: Router, private store: Store) {
    this.formulario = form.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  guardar() {
    let usuario: Usuario = this.formulario.value;
    this.alertaService.showLoading();
    
    this.authService.login(usuario).subscribe({
      next: response => {
        this.alertaService.close();
        if (usuario.username === response[0].username && usuario.password === response[0].password) {
          let data: Usuario = response[0];
          this.store.dispatch(cargarSesion({data}));
          localStorage.setItem('nombre', response[0].nombre);
          localStorage.setItem('apellido', response[0].apellido);
          localStorage.setItem('session', response[0].rol);
          this.router.navigateByUrl('/admin');
        }
      },
      error: error => {
        this.alertaService.close();
        this.alertaService.mostrarAlertaError('credenciales incorrectas');
      }
    })
  }

}
