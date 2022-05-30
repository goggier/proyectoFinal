
import { createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/components/core/interfaces/Usuario.interface';
import * as AlumnoActions from './alumno.action';

export const alumnoFeatureKey = 'alumno';

export interface AlumnoState {
  cargando: boolean;
  alumnos: Usuario[];
}

export const initialState: AlumnoState = {
  cargando: false,
  alumnos: [],
};

export const alumnoReducer = createReducer(
  initialState,
  on(AlumnoActions.cargarAlumnos, (state) => {
    return { ...state, cargando: true };
  }),
  on(AlumnoActions.alumnosCargados, (state, { alumnos }) => {
    return { ...state, cargando: false, alumnos };
  })
);