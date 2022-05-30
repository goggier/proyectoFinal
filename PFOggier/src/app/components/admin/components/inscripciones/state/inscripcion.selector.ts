import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InscripcionState } from 'src/app/components/core/models/inscripcion.state';
import * as fromInscripciones from './inscripcion.reducer';

export const selectorInscripciones = createFeatureSelector<InscripcionState>(
  fromInscripciones.inscripcionesFeatureKey
);

export const selectorCargandoInscripciones = createSelector(
  selectorInscripciones,
  (state: InscripcionState) => state.cargando
);

export const selectorListaInscripciones = createSelector(
  selectorInscripciones,
  (state: InscripcionState) => state.inscripciones
);

export const selectorListaInscripcionesCurso = createSelector(
  selectorInscripciones,
  (state: InscripcionState) => state.inscripciones
);

export const selectorListaInscripcionesAlumno = createSelector(
  selectorInscripciones,
  (state: InscripcionState) => state.inscripciones
);