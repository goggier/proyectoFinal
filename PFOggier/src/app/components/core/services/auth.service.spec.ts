
import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { AuthService } from './auth.service';
import { Usuario } from '../interfaces/Usuario.interface';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it(
    'El login funciona correctamente',
    inject([HttpTestingController, AuthService], 
    (httpMock: HttpTestingController, authService: AuthService) => {
      const mockUsuario: Usuario = {
        username: "goggier",
        nombre: "German",
        apellido: "Oggier",
        password: "kjasbkjabj",
        dni: 39613689,
        email: "german.oggier19@gmail.com",
        rol: "admin",
        id: "1"
      };

      authService.login(mockUsuario).subscribe((usuarioLogueado) => {
        console.log(usuarioLogueado);
        expect(usuarioLogueado[0].id).toEqual("1");
      });

      const req = httpMock.expectOne({
        method: 'GET',
        url: 'https://6265dce1dbee37aff9a94c90.mockapi.io/users'
      });
      req.flush(mockUsuario);
    })
  );
});
