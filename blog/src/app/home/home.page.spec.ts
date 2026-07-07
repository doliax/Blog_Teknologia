import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { HomePageModule } from './home.module';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // La página se importa vía su módulo (no re-declarada) para que el
      // compilador resuelva app-menu-mobile y compañía.
      imports: [IonicModule.forRoot(), HomePageModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
