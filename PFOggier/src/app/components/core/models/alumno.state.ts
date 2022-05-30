import { Usuario } from "../interfaces/Usuario.interface";

export interface AlumnoState {
  cargando: boolean;
  alumnos: Usuario[];
}