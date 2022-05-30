
import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/components/core/interfaces/Usuario.interface';

export const cargarAlumnos = createAction('[Lista Alumnos] Cargar Alumnos');

export const alumnosCargados = createAction(
  '[Lista Alumnos] Alumnos Cargados',
  props<{ alumnos: Usuario[] }>()
);