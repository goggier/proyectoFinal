import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/app/interfaces/Alumno.interface';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from 'src/app/services/alumno.service';
import { AlertaService } from 'src/app/services/alerta.service';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent implements OnInit {

  formularioAlumno!: FormGroup;
  titulo: string = 'Editar Alumno';
  @Input() esNuevo: Boolean = true;
  // @Input() alumno: any = {}

  estiloSize = {
    sizeCabecera : '20px'
  }

  constructor(public form: FormBuilder,private alumnoService: AlumnoService, private alertaService: AlertaService,public modalDialogAlumnoActive: MatDialogRef<AbmAlumnosComponent>,
    @ Inject(MAT_DIALOG_DATA) public alumnoEditar: Alumno) {
      this.formularioAlumno = form.group({
        nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
        apellido: new FormControl('', [Validators.required]),
        edad: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        fechaIngreso: new FormControl('', [Validators.required]),
        celular: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)])
      })
    }

  ngOnInit(): void {
    if (this.esNuevo){
      this.titulo= 'Agregar Alumno';
    }
    if(this.alumnoEditar){
      this.formularioAlumno.get('nombre')?.setValue(this.alumnoEditar.nombre);
      this.formularioAlumno.get('apellido')?.setValue(this.alumnoEditar.apellido);
      this.formularioAlumno.get('edad')?.setValue(this.alumnoEditar.edad);
      this.formularioAlumno.get('email')?.setValue(this.alumnoEditar.email);
      this.formularioAlumno.get('fechaIngreso')?.setValue(new Date(this.alumnoEditar.fechaIngreso));
      this.formularioAlumno.get('celular')?.setValue(this.alumnoEditar.celular);
    }
  }

  setAlumnoSubmit() {
      
  }

  guardarAlumno(){
    let alumno: Alumno = this.formularioAlumno.value;
    let textoExito: string = '';
    this.alertaService.showLoading();
    if (this.esNuevo){
      this.alumnoService.saveAlumno(alumno);
      textoExito = `El alumno: ${alumno.nombre} ha sido agregado con Éxito!`
    }else{
      this.alumnoService.editAlumno(alumno, this.alumnoEditar.id);
      textoExito = `El alumno: ${alumno.nombre} ha sido modificado con Éxito!`
    }
    this.alertaService.mostrarAlertaExito(textoExito).then((resolve) => {
      if (resolve.value) {
        this.formularioAlumno.reset();
        this.modalDialogAlumnoActive.close(alumno);
      }
    });
  }

}
