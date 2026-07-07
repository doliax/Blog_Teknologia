import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // El componente se importa vía su módulo para que el compilador
      // resuelva ion-app/ion-router-outlet (CUSTOM_ELEMENTS_SCHEMA ya no
      // basta con la compilación AOT de los tests).
      imports: [AppModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
