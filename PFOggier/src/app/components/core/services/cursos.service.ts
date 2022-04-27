import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../interfaces/Curso.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  // cursos$: Observable<Curso[]>;
  // cursosPromise!: Promise<Curso[]>;

  constructor(private http: HttpClient) {}

  saveCurso(curso: Curso) {
    return this.http.post(`${environment.urlApi}/cursos`, curso);
  }

  editCurso(curso: Curso, id: number){
    return this.http.put(`${environment.urlApi}/cursos/${id}`, curso)
  }

  deleteCurso(id: number) {
    return this.http.delete(`${environment.urlApi}/cursos/${id}`);
  }

  obtenerCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${environment.urlApi}/cursos`);
  }

  // obtenerCursosFiltrados(): Observable<Curso[]> {
  //   return this.cursos$.pipe(
  //     map(cursos => cursos.filter(curso => curso.duracionMeses > 4))
  //   );
  // }
}
