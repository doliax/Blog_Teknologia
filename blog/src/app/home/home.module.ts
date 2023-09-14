import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MenuModule } from '../reutilizables/menu/menu.module';
import { MenuMobileModule } from "../reutilizables/menu-mobile/menu-mobile.module";


@NgModule({
    declarations: [HomePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        MenuModule,
        MenuMobileModule
    ]
})
export class HomePageModule {}
