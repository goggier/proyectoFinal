import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Alumno } from 'src/app/components/core/interfaces/Alumno.interface';
import { Usuario } from 'src/app/components/core/interfaces/Usuario.interface';
import { AlertaService } from 'src/app/components/core/services/alerta.service';
import { AlumnoService } from 'src/app/components/core/services/alumno.service';
import { AbmAlumnosComponent } from '../abm-alumnos/abm-alumnos.component';
import { cargarAlumnos } from '../state/alumno.action';
import { selectorAlumno } from '../state/alumno.selector';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'dni', 'email', 'fechaIngreso', 'celular', 'acciones'];
  listaAlumnos: Usuario[] = [];
  datosSuscriptionObservable!: Subscription;

  estiloSize = {
    sizeCabecera : '20px'
  }

  @ViewChild(MatTable) tabla1!: MatTable<Alumno>;

  constructor(private alumnoServicio: AlumnoService, public modalDialogAlumno: MatDialog, private alertaService: AlertaService, private store: Store) { }

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos() {
    this.store.dispatch(cargarAlumnos());
    this.datosSuscriptionObservable = this.store.select(selectorAlumno).subscribe((state)=>{
      this.listaAlumnos = state.alumnos;
    });
  }

  agregarNuevoAlumno(){
    const dialog = this.modalDialogAlumno.open(AbmAlumnosComponent, {
      hasBackdrop: false,
    });
    dialog.componentInstance.esNuevo = true;
    dialog.afterClosed().subscribe(alumno => {
      this.getAlumnos();
      this.tabla1.renderRows();
    });
  }

  updateAlumno(alumnoSeleccionado: Usuario) {
    const dialog = this.modalDialogAlumno.open(AbmAlumnosComponent, {
      hasBackdrop: false,
      data: alumnoSeleccionado
    });
    dialog.componentInstance.esNuevo = false;
    dialog.afterClosed().subscribe(alumno => {
      this.getAlumnos();
      this.tabla1.renderRows();
    });
  }

  deleteAlumno(alumnoDelete: Usuario) {
    this.alertaService.mostrarAlerta(`esta seguro que desea eliminar al alumno ${alumnoDelete.nombre} ??`).then(
      (result) => {
        if (result.isConfirmed) {
          this.alumnoServicio.deleteAlumno(alumnoDelete.id).subscribe(({
            next: data => {
              this.alertaService.mostrarAlertaExito(`El alumno ${alumnoDelete.nombre} ha sido eliminado con éxito!`).then((resolve) => {
                if (resolve.value) {
                  this.getAlumnos();
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

}
