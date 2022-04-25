import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Curso } from 'src/app/components/core/interfaces/Curso.interface';
import { CursosService } from 'src/app/components/core/services/cursos.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss']
})
export class ListaCursosComponent implements OnInit, OnDestroy {

  cursosPromesa: Curso[] = [];
  cursosPromise!: Promise<Curso[]>;
  cursosObservable$!: Observable<Curso[]>
  cursoObservable: Curso[] = [];
  curssos: Curso[] = [];
  cursoObservableFiltrado: Curso[] = [];
  datosSuscriptionObservable!: Subscription;
  datosSuscriptionObservableFiltrado!: Subscription;
  cursosObservableFiltrados$!: Observable<Curso[]>

  estiloSize = {
    sizeCabecera : '20px'
  }
  
  constructor(private cursoService: CursosService) { }



  ngOnInit(): void {
    this.obtenerCursosObservables();
    this.obtenerDesdeApi();
  }

  obtenerDesdeApi() {
    this.cursoService.obtenerDesdeApi().subscribe((respuesta) => {
      this.curssos = respuesta;
      console.log('rta api:', this.curssos)
    })
  }

  ngOnDestroy() {
    this.datosSuscriptionObservable.unsubscribe();
  }

  obtenerCursosObservables(){
    this.cursosObservable$ = this.cursoService.obtenerCursos();
    this.datosSuscriptionObservable = this.cursosObservable$.subscribe((datos) => {
      this.cursoObservable = datos;
    });
  }
}
