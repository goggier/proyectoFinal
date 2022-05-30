import { Action, createReducer, on } from '@ngrx/store';
import { Inscripcion } from 'src/app/components/core/interfaces/Inscripcion.interface';
import * as InscripcionesActions from './inscripcion.action';

export const inscripcionesFeatureKey = 'inscripciones';

export interface InscripcionState {
  cargando: boolean;
  inscripciones: Inscripcion[];
}

export const initialState: InscripcionState = {
  cargando: false,
  inscripciones: [],
};

export const inscripcionesReducer = createReducer(
  initialState,

  on(InscripcionesActions.cargarInscripciones, (state) => {
    return { ...state, cargando: true };
  }),
  on(InscripcionesActions.inscripcionesCargadas, (state, { inscripciones }) => {
    return { ...state, cargando: false, inscripciones };
  })
);