import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AlumnoState } from 'src/app/components/core/models/alumno.state';
import * as fromAlumno from './alumno.reducer';

export const selectorAlumno = createFeatureSelector<AlumnoState>(
  fromAlumno.alumnoFeatureKey
);