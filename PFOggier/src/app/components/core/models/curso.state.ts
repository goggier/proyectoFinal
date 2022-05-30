import { Curso } from "../interfaces/Curso.interface";

export interface CursoState {
  cargando: boolean;
  cursos: Curso[];
}