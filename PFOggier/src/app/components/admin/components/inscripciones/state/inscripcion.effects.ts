import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, exhaustMap, map } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as InscripcionesActions from './inscripcion.action';
// import { cursosCargados } from '../../cursos/state/curso.actions';
import {
  cargarInscripciones,
  inscripcionesCargadas
} from './inscripcion.action';
import { InscripcionService } from 'src/app/components/core/services/inscripcion.service';

@Injectable()
export class InscripcionesEffects {

  constructor( private actions$: Actions, private inscripcionService: InscripcionService) {}
  
  cargarInscripcionesEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(cargarInscripciones),
      exhaustMap(() =>
        this.inscripcionService
          .obtenerInscripciones()
          .pipe(
            map((inscripciones) => inscripcionesCargadas({ inscripciones }))
          )
      )
    )
  );
}