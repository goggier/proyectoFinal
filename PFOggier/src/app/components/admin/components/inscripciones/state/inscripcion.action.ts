import { createAction, props } from '@ngrx/store';
import { Inscripcion } from 'src/app/components/core/interfaces/Inscripcion.interface';

export const cargarInscripciones = createAction(
  '[Lista Inscripciones] Cargar Inscripciones'
);

export const inscripcionesCargadas = createAction(
  '[Lista Inscripciones] Inscripciones Cargadas',
  props<{ inscripciones: Inscripcion[] }>()
);