import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces/Alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  listaAlumnos : Alumno[] = [
    {
      id: 1,
      nombre : 'German',
      apellido: 'Oggier',
      edad: 25,
      fechaIngreso: '11/19/2021',
      celular: '03535643972',
      email: 'german.oggier19@gmail.com'
    },
    {
      id: 2,
      nombre : 'Gaspar',
      apellido: 'Santillan',
      edad: 24,
      fechaIngreso: '11/12/2021',
      celular: '03534656774',
      email: 'german.zantilla@gmail.com'
    },
    {
      id: 3,
      nombre : 'Gianni',
      apellido: 'Tiezzi',
      edad: 25,
      fechaIngreso: '10/19/2021',
      celular: '03535447654',
      email: 'giannitiezzi@gmail.com'
    },
    {
      id: 4,
      nombre : 'Mateo',
      apellido: 'Digliodo',
      edad: 26,
      fechaIngreso: '12/11/2021',
      celular: '0353576345',
      email: 'mateo.digliodo@gmail.com'
    },
    {
      id: 5,
      nombre : 'Rodrigo',
      apellido: 'Camana',
      edad: 21,
      fechaIngreso: '9/09/2021',
      celular: '03535234434',
      email: 'rodrigo.camana@gmail.com'
    },
    {
      id: 6,
      nombre : 'Pablo',
      apellido: 'Olivo',
      edad: 23,
      fechaIngreso: '1/01/2022',
      celular: '03534628973',
      email: 'pablo.olivo@gmail.com'
    }
  ]

  constructor() { }

  getAlumnos() {
    return this.listaAlumnos;
  }

  saveAlumno(alumno: Alumno) {
    let idMax = Math.max(...this.listaAlumnos.map(alumno => alumno.id));
    alumno.id = idMax + 1;
    this.listaAlumnos.push(alumno);
  }

  editAlumno(alumno: Alumno, id: number) {
    this.listaAlumnos[id-1].nombre = alumno.nombre;
    this.listaAlumnos[id-1].apellido = alumno.apellido;
    this.listaAlumnos[id-1].celular = alumno.celular;
    this.listaAlumnos[id-1].edad = alumno.edad;
    this.listaAlumnos[id-1].email = alumno.email;
    this.listaAlumnos[id-1].fechaIngreso = alumno.fechaIngreso;
  }

  deleteAlumno(id: number) {
    this.listaAlumnos = this.listaAlumnos.filter(alumno => alumno.id !== id);	
  }
  
}
