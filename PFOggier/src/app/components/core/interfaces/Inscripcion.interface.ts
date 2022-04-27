import { Alumno } from "./Alumno.interface";
import { Curso } from "./Curso.interface";

export interface Inscripcion {
    id: number;
    // idAlumno: number;
    // idCurso: number;
    alumno: Alumno;
    curso: Curso;
}