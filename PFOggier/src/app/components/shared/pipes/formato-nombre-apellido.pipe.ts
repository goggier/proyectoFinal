import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoNombreApellido'
})
export class FormatoNombreApellidoPipe implements PipeTransform {

  transform(nombre: string, apellido: string): string {
    return `${nombre}-${apellido}`;
  }

}
