import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: 'img[appLogoDirectiva]'
  })
  export class LogoDirectivaDirective {
  
    //TODO Revisar y corregir esto
    constructor(elemImg: ElementRef) {
      elemImg.nativeElement.src = "https://cdn.logojoy.com/wp-content/uploads/2018/05/30164213/375.png"
      }
  
  }