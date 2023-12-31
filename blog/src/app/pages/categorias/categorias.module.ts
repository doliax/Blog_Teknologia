import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasPageRoutingModule } from './categorias-routing.module';

import { CategoriasPage } from './categorias.page';
import { MenuModule } from 'src/app/reutilizables/menu/menu.module';
import { BackButtonModule } from 'src/app/reutilizables/back-button/back-button.module';
import { MenuMobileModule } from 'src/app/reutilizables/menu-mobile/menu-mobile.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasPageRoutingModule,
    MenuModule,
    BackButtonModule,
    MenuMobileModule
  ],
  declarations: [CategoriasPage]
})
export class CategoriasPageModule {}
