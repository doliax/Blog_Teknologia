import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { MenuComponent } from "./menu.component";
import { LogoDirectivaDirective } from "src/app/directives/logo-directiva.directive";



@NgModule({
                              //Importamos la directiva
  declarations: [MenuComponent,LogoDirectivaDirective],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  //Exporto mi componente, si no lo hago otros componentes no pueden detectar este!!!!
  exports: [MenuComponent]
})
export class MenuModule {}