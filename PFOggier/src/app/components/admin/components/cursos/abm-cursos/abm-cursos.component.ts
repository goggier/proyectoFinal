import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertaService } from 'src/app/components/core/services/alerta.service';
import { CursosService } from 'src/app/components/core/services/cursos.service';
import { Curso } from 'src/app/components/core/interfaces/Curso.interface';

@Component({
  selector: 'app-abm-cursos',
  templateUrl: './abm-cursos.component.html',
  styleUrls: ['./abm-cursos.component.scss']
})
export class AbmCursosComponent implements OnInit {

  @Input() esNuevo: Boolean = true;
  formularioCurso!: FormGroup;
  titulo: string = 'Editar Curso';

  estiloSize = {
    sizeCabecera : '20px'
  }


  constructor(public form: FormBuilder,private cursoService: CursosService, private alertaService: AlertaService,public modalDialogAlumnoActive: MatDialogRef<AbmCursosComponent>,
    @ Inject(MAT_DIALOG_DATA) public cursoEditar: Curso) {
      this.formularioCurso = form.group({
        nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
        descripcion: new FormControl('', [Validators.required]),
        fechaInicio: new FormControl('', [Validators.required]),
        fechaFin: new FormControl('', [Validators.required]),
      })
    }

  ngOnInit(): void {
    if (this.esNuevo){
      this.titulo= 'Agregar Curso';
    }
    if(this.cursoEditar){
      this.formularioCurso.get('nombre')?.setValue(this.cursoEditar.nombre);
      this.formularioCurso.get('descripcion')?.setValue(this.cursoEditar.descripcion);
      this.formularioCurso.get('fechaInicio')?.setValue(new Date(this.cursoEditar.fechaInicio));
      this.formularioCurso.get('fechaFin')?.setValue(new Date(this.cursoEditar.fechaFin));
    }
  }

  guardarCurso(){
    let curso: Curso = this.formularioCurso.value;
    let textoExito: string = '';
    this.alertaService.showLoading();
    if (this.esNuevo){
      this.cursoService.saveCurso(curso).subscribe({
        next: data => {
          this.alertaService.mostrarAlertaExito(`El curso: ${curso.nombre} ha sido agregado con Éxito!`).then((resolve) => {
            if (resolve.value) {
              this.formularioCurso.reset();
              this.modalDialogAlumnoActive.close(data);
            }
          });
        },
        error: err => {
          console.log(err);
        }
      });
    }else{
      this.cursoService.editCurso(curso, this.cursoEditar.id).subscribe({
        next: data => {
          this.alertaService.mostrarAlertaExito(`El curso: ${curso.nombre} ha sido modificado con Éxito!`).then((resolve) => {
            if (resolve.value) {
              this.formularioCurso.reset();
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

}
