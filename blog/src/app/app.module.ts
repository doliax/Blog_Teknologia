import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { BackButtonComponent } from './reutilizables/back-button/back-button.component';
import { BackButtonModule } from './reutilizables/back-button/back-button.module';


@NgModule({
  declarations: [AppComponent, MenuComponent],                                     //Importamos el modulo de HttpClient para poder conectarnos al backend
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, BackButtonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
