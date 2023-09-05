import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { MenuComponent } from "./menu.component";



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,],
  //Exporto mi componente, si no lo hago otros componentes no pueden detectar este!!!!
  exports: [MenuComponent]
})
export class MenuModule {}