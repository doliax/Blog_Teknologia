import { Pipe, PipeTransform } from '@angular/core';

//Deciradir pipe donde le especificamos el nombre
@Pipe({
  standalone: false,
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  //Función llamada transform que al llamar al pipe se ejecuta, poniendo al reves el string
  transform(value: string): string {
    return value.split('').reverse().join('');
  }

}
