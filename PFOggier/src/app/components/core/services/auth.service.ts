import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/Usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logout() {
    localStorage.removeItem('session');
    localStorage.removeItem('nombre');
    localStorage.removeItem('apellido');
  }

  estaAutenticadoAdmin() {
    if ( localStorage.getItem('session') === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  login(user: Usuario): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${environment.urlApi}/users?search=${user.username}`);
  }
}
