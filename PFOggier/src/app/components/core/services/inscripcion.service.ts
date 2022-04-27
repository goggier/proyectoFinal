import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inscripcion } from '../interfaces/Inscripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  constructor(private http: HttpClient) { }
  
  obtenerInscripciones(): Observable<Inscripcion[]>{
    return this.http.get<Inscripcion[]>(`${environment.urlApi}/inscripciones`);
  }

  saveInscripcion(inscripcion: Inscripcion) {
    return this.http.post(`${environment.urlApi}/inscripciones`, inscripcion);
  }

  editInscripcion(inscripcion: Inscripcion, id: number){
    return this.http.put(`${environment.urlApi}/inscripciones/${id}`, inscripcion)
  }

  deleteInscripcion(id: number) {
    return this.http.delete(`${environment.urlApi}/inscripciones/${id}`);
  }
  
}
