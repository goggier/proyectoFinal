import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/components/core/interfaces/Usuario.interface';

export const cargarSesion = createAction(
  '[Auth] Cargar Sesion',
  props<{ data: Usuario }>()
);

export const loginAction = createAction(
    '[Auth] Loguearse',
    props<{data: Usuario}>()
);

export const cerrarSesion = createAction('[Auth] Cerrar Sesion');