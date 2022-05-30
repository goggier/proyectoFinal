
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CursoState } from 'src/app/components/core/models/curso.state';
import * as fromCurso from './curso.reducer';

export const selectorCurso = createFeatureSelector<CursoState>(
  fromCurso.cursoFeatureKey
);