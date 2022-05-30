import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/components/core/interfaces/Usuario.interface';
import * as AuthActions from './login.action';

export const authFeatureKey = 'auth';

export interface AuthState {
  usuarioActivo: Usuario;
}

export const initialState: AuthState = {
  usuarioActivo: {
    username: '',
    apellido: '',
    celular: '',
    dni: 0,
    email: '',
    fechaIngreso: '',
    id: 0,
    nombre: '',
    password: '',
    rol: ''
  },
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.cargarSesion, (state, { data }) => {
    return { ...state, usuarioActivo: data };
  }),

  on(AuthActions.loginAction, (state, { data }) => {
    return {...state, data};
  }),

  on(AuthActions.cerrarSesion, () => {
    return initialState;
  })
);