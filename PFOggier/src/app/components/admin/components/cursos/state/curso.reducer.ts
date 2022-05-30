import { createReducer, on } from '@ngrx/store';
import { Curso } from 'src/app/components/core/interfaces/Curso.interface';
import * as CursoActions from './curso.action';

export const cursoFeatureKey = 'curso';

export interface CursoState {
  cargando: boolean;
  cursos: Curso[];
}

export const initialState: CursoState = {
  cargando: false,
  cursos: [],
};

export const cursoReducer = createReducer(
  initialState,
  on(CursoActions.cargarCursos, (state) => {
    return { ...state, cargando: true };
  }),
  on(CursoActions.cursosCargados, (state, { cursos }) => {
    return { ...state, cargando: false, cursos };
  })
);