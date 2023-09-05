import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobreNosotrosPageRoutingModule } from './sobre-nosotros-routing.module';

import { SobreNosotrosPage } from './sobre-nosotros.page';
import { BackButtonModule } from 'src/app/reutilizables/back-button/back-button.module';
import { BackButtonComponent } from 'src/app/reutilizables/back-button/back-button.component';
import { MenuModule } from 'src/app/reutilizables/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobreNosotrosPageRoutingModule,
    BackButtonModule,
    MenuModule
     
  ],
  declarations: [SobreNosotrosPage]
})
export class SobreNosotrosPageModule {}
