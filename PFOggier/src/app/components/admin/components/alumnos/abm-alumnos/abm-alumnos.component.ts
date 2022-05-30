import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from 'src/app/components/core/services/alumno.service';
import { AlertaService } from 'src/app/components/core/services/alerta.service';
import { Usuario } from 'src/app/components/core/interfaces/Usuario.interface';

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
    @ Inject(MAT_DIALOG_DATA) public alumnoEditar: Usuario) {
      this.formularioAlumno = form.group({
        nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
        apellido: new FormControl('', [Validators.required]),
        dni: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        fechaIngreso: new FormControl('', [Validators.required]),
        celular: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
        usuario: new FormControl('', [Validators.required, Validators.minLength(4)]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      })
    }

  ngOnInit(): void {
    if (this.esNuevo){
      this.titulo= 'Agregar Alumno';
    }
    if(this.alumnoEditar){
      this.formularioAlumno.get('nombre')?.setValue(this.alumnoEditar.nombre);
      this.formularioAlumno.get('apellido')?.setValue(this.alumnoEditar.apellido);
      this.formularioAlumno.get('dni')?.setValue(this.alumnoEditar.dni);
      this.formularioAlumno.get('email')?.setValue(this.alumnoEditar.email);
      this.formularioAlumno.get('fechaIngreso')?.setValue(new Date(this.alumnoEditar.fechaIngreso));
      this.formularioAlumno.get('celular')?.setValue(this.alumnoEditar.celular);
      this.formularioAlumno.get('usuario')?.setValue(this.alumnoEditar.username);
      this.formularioAlumno.get('password')?.setValue(this.alumnoEditar.password);
    }
  }

  setAlumnoSubmit() {
      
  }

  guardarAlumno() {
    let alumno: Usuario = this.formularioAlumno.value;
    alumno.rol = 'alumno';
    let textoExito: string = '';
    this.alertaService.showLoading();
    if (this.esNuevo){
      this.alumnoService.saveAlumno(alumno).subscribe({
        next: data => {
          this.alertaService.mostrarAlertaExito(`El curso: ${alumno.nombre} ha sido agregado con Éxito!`).then((resolve) => {
            if (resolve.value) {
              this.formularioAlumno.reset();
              this.modalDialogAlumnoActive.close(data);
            }
          });
        },
        error: err => {
          console.log(err);
        }
      });
    }else{
      this.alumnoService.editAlumno(alumno, this.alumnoEditar.id).subscribe({
        next: data => {
          this.alertaService.mostrarAlertaExito(`El curso: ${alumno.nombre} ha sido modificado con Éxito!`).then((resolve) => {
            if (resolve.value) {
              this.formularioAlumno.reset();
              this.modalDialogAlumnoActive.close(data);
            }
          });
        },
        error: err => {
          console.log(err);
        }
      });;
    }
  }

  // guardarAlumno(){
  //   let alumno: Alumno = this.formularioAlumno.value;
  //   let textoExito: string = '';
  //   this.alertaService.showLoading();
  //   if (this.esNuevo){
  //     this.alumnoService.saveAlumno(alumno);
  //     textoExito = `El alumno: ${alumno.nombre} ha sido agregado con Éxito!`
  //   }else{
  //     this.alumnoService.editAlumno(alumno, this.alumnoEditar.id);
  //     textoExito = `El alumno: ${alumno.nombre} ha sido modificado con Éxito!`
  //   }
  //   this.alertaService.mostrarAlertaExito(textoExito).then((resolve) => {
  //     if (resolve.value) {
  //       this.formularioAlumno.reset();
  //       this.modalDialogAlumnoActive.close(alumno);
  //     }
  //   });
  // }

}
