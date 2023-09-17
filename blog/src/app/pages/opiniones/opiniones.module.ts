import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpinionesPageRoutingModule } from './opiniones-routing.module';

import { OpinionesPage } from './opiniones.page';
import { ReverseStringPipe } from 'src/app/pipes/reverse-string.pipe';
import { BackButtonModule } from 'src/app/reutilizables/back-button/back-button.module';
import { MenuMobileModule } from 'src/app/reutilizables/menu-mobile/menu-mobile.module';
import { MenuModule } from 'src/app/reutilizables/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpinionesPageRoutingModule,
    BackButtonModule,
    MenuMobileModule,
    MenuModule
  ],
  declarations: [OpinionesPage]
})
export class OpinionesPageModule {}
