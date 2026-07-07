import { ElementRef } from '@angular/core';

import { LogoDirectivaDirective } from './logo-directiva.directive';

describe('LogoDirectivaDirective', () => {
  it('should create an instance', () => {
    //El constructor exige un ElementRef: se le pasa una <img> real del DOM
    const directive = new LogoDirectivaDirective(new ElementRef(document.createElement('img')));
    expect(directive).toBeTruthy();
  });
});
