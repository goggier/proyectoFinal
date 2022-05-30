import { Inscripcion } from "../interfaces/Inscripcion.interface";

export interface InscripcionState {
  cargando: boolean;
  inscripciones: Inscripcion[];
}