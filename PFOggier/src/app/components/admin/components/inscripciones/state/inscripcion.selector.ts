import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InscripcionState } from 'src/app/components/core/models/inscripcion.state';
import * as fromInscripciones from './inscripcion.reducer';

export const selectorInscripciones = createFeatureSelector<InscripcionState>(
  fromInscripciones.inscripcionesFeatureKey
);