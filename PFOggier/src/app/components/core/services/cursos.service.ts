import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../interfaces/Curso.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  listaCursos : Curso[] = [
    {
      id: 1,
      nombre : 'Curso Angular',
      descripcion: 'observables y ruteos',
      fechaInicio: '07/19/2021',
      duracionMeses: 5
    },
    {
      id: 2,
      nombre : 'Curso React',
      descripcion: 'componentes reutilizables',
      fechaInicio: '07/19/2021',
      duracionMeses: 4
    },
    {
      id: 3,
      nombre : 'Curso UX',
      descripcion: 'prototipado de sistemas',
      fechaInicio: '07/19/2021',
      duracionMeses: 3
    },
    {
      id: 4,
      nombre : 'Curso spring',
      descripcion: 'crud y manejo de archivos',
      fechaInicio: '07/19/2021',
      duracionMeses: 7
    },
    {
      id: 5,
      nombre : 'Curso express',
      descripcion: 'backend de 0 a experto',
      fechaInicio: '07/19/2021',
      duracionMeses: 8
    },
    {
      id: 6,
      nombre : 'Curso base de datos',
      descripcion: 'persistencia de datos',
      fechaInicio: '07/19/2021',
      duracionMeses: 2
    }
  ]

  cursos$: Observable<Curso[]>;
  cursosPromise!: Promise<Curso[]>;

  constructor(private http: HttpClient) {
    this.cursos$ = of(this.listaCursos);

    this.cursosPromise = new Promise((resolve, reject) => {
      if(this.listaCursos.length > 0){
        resolve(this.listaCursos);
      }else{
        reject(this.listaCursos);
      }
    });
  }

  obtenerCursosPromise(){
    return this.cursosPromise;
  }

  obtenerDesdeApi():Observable<any> {
    return this.http.get(`${environment.urlApi}/cursos`);
  }

  obtenerCursos(): Observable<Curso[]>{
    return this.cursos$;
  }

  obtenerCursosFiltrados(): Observable<Curso[]> {
    return this.cursos$.pipe(
      map(cursos => cursos.filter(curso => curso.duracionMeses > 4))
    );
  }
}
