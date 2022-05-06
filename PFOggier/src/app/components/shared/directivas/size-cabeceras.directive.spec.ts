import { ElementRef } from '@angular/core';
import { SizeCabecerasDirective } from './size-cabeceras.directive';

describe('SizeCabecerasDirective', () => {
  it('should create an instance', () => {
    const   estiloSize: any = {
      sizeCabecera : '20px'
    }
    const directive = new SizeCabecerasDirective(estiloSize);
    expect(directive).toBeTruthy();
  });
});
