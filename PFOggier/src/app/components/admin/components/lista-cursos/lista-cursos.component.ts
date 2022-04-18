import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Curso } from 'src/app/interfaces/Curso.interface';
import { CursosService } from 'src/app/services/cursos.service';

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
  cursoObservableFiltrado: Curso[] = [];
  datosSuscriptionObservable!: Subscription;
  datosSuscriptionObservableFiltrado!: Subscription;
  cursosObservableFiltrados$!: Observable<Curso[]>

  estiloSize = {
    sizeCabecera : '20px'
  }
  
  constructor(private cursoService: CursosService) { }



  ngOnInit(): void {
    this.obtenerCursoPromesa();
    this.obtenerCursosObservables();
    this.obtenerCursosObservablesFiltrados();
  }

  ngOnDestroy() {
    this.datosSuscriptionObservable.unsubscribe();
    this.datosSuscriptionObservableFiltrado.unsubscribe();
  }

  obtenerCursosObservables(){
    this.cursosObservable$ = this.cursoService.obtenerCursos();
    this.datosSuscriptionObservable = this.cursosObservable$.subscribe((datos) => {
      this.cursoObservable = datos;
    });
  }

  obtenerCursosObservablesFiltrados(){
    this.cursosObservableFiltrados$ = this.cursoService.obtenerCursosFiltrados();
    this.datosSuscriptionObservableFiltrado = this.cursosObservable$.subscribe((datos) => {
      this.cursoObservable = datos;
    });
  }

  obtenerCursoPromesa() {
    this.cursosPromise = this.cursoService.obtenerCursosPromise();
    this.cursosPromise.then((cursos) => {
      this.cursosPromesa = cursos;
    })
    .catch((error) => {
      console.error(error);
    });
  }



}
