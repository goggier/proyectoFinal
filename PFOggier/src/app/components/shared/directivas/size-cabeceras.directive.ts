import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSizeCabeceras]'
})
export class SizeCabecerasDirective implements OnInit{

  @Input('appSizeCabeceras') estiloSize !: any;

  constructor(private elemento: ElementRef) { }

  ngOnInit(): void {
    this.elemento.nativeElement.style.fontSize = this.estiloSize.sizeCabecera;
  }

}
