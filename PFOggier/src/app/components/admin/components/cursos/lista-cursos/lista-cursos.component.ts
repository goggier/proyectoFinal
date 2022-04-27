import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Curso } from 'src/app/components/core/interfaces/Curso.interface';
import { AlertaService } from 'src/app/components/core/services/alerta.service';
import { CursosService } from 'src/app/components/core/services/cursos.service';
import { AbmCursosComponent } from '../abm-cursos/abm-cursos.component';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss']
})
export class ListaCursosComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'fechaInicio', 'fechaFin' ,'acciones'];

  // cursosObservable$!: Observable<Curso[]>
  cursos: Curso[] = [];
  datosSuscriptionObservable!: Subscription;

  @ViewChild(MatTable) tabla1!: MatTable<Curso>;

  estiloSize = {
    sizeCabecera : '20px'
  }
  
  constructor(private cursoService: CursosService, public modalDialogAlumno: MatDialog, private alertaService: AlertaService) { }



  ngOnInit(): void {
    this.obtenerCursosObservables();
  }

  obtenerCursosObservables() {
    this.datosSuscriptionObservable =  this.cursoService.obtenerCursos().subscribe((respuesta) => {
      this.cursos = respuesta;
      console.log('rta api:', this.cursos)
    })
  }

  agregarNuevoAlumno(){
    const dialog = this.modalDialogAlumno.open(AbmCursosComponent, {
      hasBackdrop: false,
    });
    dialog.componentInstance.esNuevo = true;
    dialog.afterClosed().subscribe(alumno => {
      this.obtenerCursosObservables();
      this.tabla1.renderRows();
    });
  }

  updateCurso(alumnoSeleccionado: Curso) {
    const dialog = this.modalDialogAlumno.open(AbmCursosComponent, {
      hasBackdrop: false,
      data: alumnoSeleccionado
    });
    dialog.componentInstance.esNuevo = false;
    dialog.afterClosed().subscribe(alumno => {
      this.obtenerCursosObservables();
      this.tabla1.renderRows();
    });
  }

  deleteCurso(cursoDelete: Curso) {
    this.alertaService.mostrarAlerta(`esta seguro que desea eliminar al alumno ${cursoDelete.nombre} ??`).then(
      (result) => {
        if (result.isConfirmed) {
          this.cursoService.deleteCurso(cursoDelete.id).subscribe(({
            next: data => {
              this.alertaService.mostrarAlertaExito(`El alumno ${cursoDelete.nombre} ha sido eliminado con éxito!`).then((resolve) => {
                if (resolve.value) {
                  this.obtenerCursosObservables();
                  this.tabla1.renderRows();
                }
              });
            },
            error: error => {
              console.log(error);
            }
          }));
        }
      }
    )
  }

  ngOnDestroy() {
    this.datosSuscriptionObservable.unsubscribe();
  }

  // obtenerCursosObservables(){
  //   this.cursosObservable$ = this.cursoService.obtenerCursos();
  //   this.datosSuscriptionObservable = this.cursosObservable$.subscribe((datos) => {
  //     this.cursos = datos;
  //   });
  // }
}
