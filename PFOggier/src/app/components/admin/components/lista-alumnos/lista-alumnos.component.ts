import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Alumno } from 'src/app/interfaces/Alumno.interface';
import { AlertaService } from 'src/app/services/alerta.service';
import { AlumnoService } from 'src/app/services/alumno.service';
import { AbmAlumnosComponent } from '../abm-alumnos/abm-alumnos.component';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'edad', 'email', 'fechaIngreso', 'celular', 'acciones'];
  listaAlumnos: Alumno[] = [];

  estiloSize = {
    sizeCabecera : '20px'
  }

  @ViewChild(MatTable) tabla1!: MatTable<Alumno>;

  constructor(private alumnoServicio: AlumnoService, public modalDialogAlumno: MatDialog, private alertaService: AlertaService) {
    this.getAlumnos();
   }

  ngOnInit(): void {
  }

  getAlumnos() {
    this.listaAlumnos = this.alumnoServicio.getAlumnos();
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

  updateAlumno(alumnoSeleccionado: Alumno) {
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

  deleteAlumno(alumnoDelete: Alumno) {
    this.alertaService.mostrarAlerta(`esta seguro que desea eliminar al alumno ${alumnoDelete.nombre} ??`).then(
      (result) => {
        if (result.isConfirmed) {
          this.alumnoServicio.deleteAlumno(alumnoDelete.id);
          this.alertaService.mostrarAlertaExito(`El alumno ${alumnoDelete.nombre} ha sido eliminado con éxito!`).then((resolve) => {
            if (resolve.value) {
              this.getAlumnos();
              this.tabla1.renderRows();
            }
          });
        }
      }
    )
  }

}
