import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { AlumnoService } from 'src/app/components/core/services/alumno.service';
import { cargarAlumnos, alumnosCargados } from './alumno.action';

@Injectable()
export class AlumnosEffects {

  constructor( private actions$: Actions, private alumnosService: AlumnoService) {}

  cargarAlumnosEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(cargarAlumnos),
      exhaustMap(() =>
        this.alumnosService
          .getAlumnos()
          .pipe(map((alumnos) => alumnosCargados({ alumnos })))
      )
    )
  );

}