import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Alumno } from 'src/app/components/core/interfaces/Alumno.interface';
import { Curso } from 'src/app/components/core/interfaces/Curso.interface';
import { Inscripcion } from 'src/app/components/core/interfaces/Inscripcion.interface';
import { AlertaService } from 'src/app/components/core/services/alerta.service';
import { AlumnoService } from 'src/app/components/core/services/alumno.service';
import { CursosService } from 'src/app/components/core/services/cursos.service';
import { InscripcionService } from 'src/app/components/core/services/inscripcion.service';

@Component({
  selector: 'app-abm-incripciones',
  templateUrl: './abm-incripciones.component.html',
  styleUrls: ['./abm-incripciones.component.scss']
})
export class AbmIncripcionesComponent implements OnInit, OnDestroy {

  @Input() esNuevo: Boolean = true;
  formulario!: FormGroup;
  selectedAlumno!: Alumno;
  disabled: boolean = true;
  titulo: string = 'Editar Inscripcion';
  datosSuscriptionObservable!: Subscription;
  listaAlumnos: Alumno[] = [];
  cursos: Curso[] = [];
  estiloSize = {
    sizeCabecera : '20px'
  }

  constructor(public form: FormBuilder,private inscripcionService: InscripcionService, private alertaService: AlertaService,public modalDialogActive: MatDialogRef<AbmIncripcionesComponent>,
    @ Inject(MAT_DIALOG_DATA) public inscripcionEditar: Inscripcion, private cursoService: CursosService, private alumnoService: AlumnoService) {
      this.formulario = form.group({
        alumno: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        curso: new FormControl('', [Validators.required]),
      })
    }

  ngOnInit(): void {
    this.getAlumnos();
    this.getCursosObservables();
    if (this.esNuevo){
      this.titulo= 'Agregar Inscripcion';
    }
    if(this.inscripcionEditar){
      this.formulario.get('alumno')?.setValue(this.inscripcionEditar.alumno);
      this.selectedAlumno = this.inscripcionEditar.alumno;
      this.formulario.get('email')?.setValue(this.inscripcionEditar.alumno.email);
      this.formulario.get('curso')?.setValue(this.inscripcionEditar.curso);
      console.log('form value: ', this.formulario.value);
    }
  }

  getAlumnos() {
    this.listaAlumnos = this.alumnoService.getAlumnos();
  }

  compareObjects(o1: any, o2: any): boolean {
    return o1.name === o2.name && o1.id === o2.id;
  }

  compareCursos(o1: any, o2: any): boolean {
    return o1.name === o2.name && o1.id === o2.id;
  }

  getCursosObservables() {
    this.datosSuscriptionObservable =  this.cursoService.obtenerCursos().subscribe((respuesta) => {
      this.cursos = respuesta;
    })
  }

  setEmailHtml(alumno: Alumno){
    this.formulario.get('email')?.setValue(alumno.email);
  }

  guardar(){
    let inscripcion: Inscripcion = {
      id: 0,
      alumno: this.formulario.value.alumno,
      curso: this.formulario.value.curso
    }
    this.alertaService.showLoading();
    if (this.esNuevo){
      this.inscripcionService.saveInscripcion(inscripcion).subscribe({
        next: data => {
          this.alertaService.mostrarAlertaExito(`El alumno: ${inscripcion.alumno.nombre} ha sido inscripto con Éxito al curso ${inscripcion.curso.nombre}!`).then((resolve) => {
            if (resolve.value) {
              this.formulario.reset();
              this.modalDialogActive.close(data);
            }
          });
        },
        error: err => {
          console.log(err);
        }
      });
    }else{
      this.inscripcionService.editInscripcion(inscripcion, this.inscripcionEditar.id).subscribe({
        next: data => {
          this.alertaService.mostrarAlertaExito(`la incripcion del alumno: ${inscripcion.alumno.nombre} ha sido modificada con Éxito!`).then((resolve) => {
            if (resolve.value) {
              this.formulario.reset();
              this.modalDialogActive.close(data);
            }
          });
        },
        error: err => {
          console.log(err);
        }
      });;
    }
  }

  ngOnDestroy() {
    this.datosSuscriptionObservable.unsubscribe();
  }

}
