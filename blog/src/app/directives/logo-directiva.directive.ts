import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: 'img[appLogoDirectiva]'
  })
  export class LogoDirectivaDirective {
  
    //En el constructor ponemos un elemento de referencia el cual accede al nativeElement del DOM y a la propiedad src para asignarle la url 
    constructor(elemImg: ElementRef) {
      elemImg.nativeElement.src = "https://cdn.logojoy.com/wp-content/uploads/2018/05/30164213/375.png"
      }
  
  }