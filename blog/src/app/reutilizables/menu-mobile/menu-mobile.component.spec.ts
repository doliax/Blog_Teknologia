import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MenuMobileComponent } from './menu-mobile.component';
import { MenuMobileModule } from './menu-mobile.module';

describe('MenuMobileComponent', () => {
  let component: MenuMobileComponent;
  let fixture: ComponentFixture<MenuMobileComponent>;

  //async/await en lugar de waitForAsync: vitest no ejecuta dentro de ProxyZone
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // El componente se importa vía su módulo (no re-declarado) para que el
      // compilador resuelva routerLink; RouterModule aporta el Router en tests.
      imports: [IonicModule.forRoot(), MenuMobileModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
