import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Inscripcion } from 'src/app/components/core/interfaces/Inscripcion.interface';
import { AlertaService } from 'src/app/components/core/services/alerta.service';
import { InscripcionService } from 'src/app/components/core/services/inscripcion.service';
import { AbmIncripcionesComponent } from '../abm-incripciones/abm-incripciones.component';

@Component({
  selector: 'app-lista-incripciones',
  templateUrl: './lista-incripciones.component.html',
  styleUrls: ['./lista-incripciones.component.scss']
})
export class ListaIncripcionesComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'alumno', 'curso', 'acciones'];

  // cursosObservable$!: Observable<Curso[]>
  inscripciones: Inscripcion[] = [];
  datosSuscriptionObservable!: Subscription;

  @ViewChild(MatTable) tabla1!: MatTable<Inscripcion>;

  estiloSize = {
    sizeCabecera : '20px'
  }

  constructor( private inscripcionService : InscripcionService, public modalDialogAlumno: MatDialog, private alertaService: AlertaService ) { }

  ngOnInit(): void {
    this.obtenerInscripcionesObservables();
  }

  obtenerInscripcionesObservables() {
    this.datosSuscriptionObservable =  this.inscripcionService.obtenerInscripciones().subscribe((respuesta) => {
      this.inscripciones = respuesta;
      console.log(this.inscripciones);
    })
  }

  agregarNuevaInscripcion(){
    const dialog = this.modalDialogAlumno.open(AbmIncripcionesComponent, {
      hasBackdrop: false,
    });
    dialog.componentInstance.esNuevo = true;
    dialog.afterClosed().subscribe(alumno => {
      this.obtenerInscripcionesObservables();
      //this.tabla1.renderRows();
    });
  }

  updateInscripcion(inscripcionSeleccionada: Inscripcion) {
    const dialog = this.modalDialogAlumno.open(AbmIncripcionesComponent, {
      hasBackdrop: false,
      data: inscripcionSeleccionada
    });
    dialog.componentInstance.esNuevo = false;
    dialog.afterClosed().subscribe(alumno => {
      this.obtenerInscripcionesObservables();
      this.tabla1.renderRows();
    });
  }

  deleteInscripcion(inscripcionDelete: Inscripcion) {
    this.alertaService.mostrarAlerta(`esta seguro que desea eliminar al alumno ${inscripcionDelete.id} ??`).then(
      (result) => {
        if (result.isConfirmed) {
          this.inscripcionService.deleteInscripcion(inscripcionDelete.id).subscribe(({
            next: data => {
              this.alertaService.mostrarAlertaExito(`La inscripcion ${inscripcionDelete.id} ha sido eliminada con éxito!`).then((resolve) => {
                if (resolve.value) {
                  this.obtenerInscripcionesObservables();
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

}
