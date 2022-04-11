import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor() { }

    mostrarAlertaExito(texto: String){
    return swal.fire({
      title: texto,
      text: 'haga click para continuar',
      icon: 'success',
      showConfirmButton: true
    })
  }

  showLoading() {
    swal.showLoading();
  }

  //En este caso el titulo va a ser siempre el mismo, va a cambiar el text, por lo tanto se recibe un Any sino da error 
  //por el tipo de dato
  mostrarAlertaError(texto : any){
    return swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: texto,
    });
  }

  mostrarAlerta(texto: String) {
    return  swal.fire({
      title: texto,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    })

  }
}
