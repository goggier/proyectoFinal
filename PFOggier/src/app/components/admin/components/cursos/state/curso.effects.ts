import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { CursosService } from 'src/app/components/core/services/cursos.service';

import { cargarCursos, cursosCargados } from './curso.action';

@Injectable()
export class CursoEffects {

  constructor( private actions$: Actions, private cursosService: CursosService) {}  

  cargarCursosEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(cargarCursos),
      exhaustMap(() =>
        this.cursosService.obtenerCursos().pipe(
          map((cursos) => cursosCargados({ cursos }))
        )
      )
    )
  );

}