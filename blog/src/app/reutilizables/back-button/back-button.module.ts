import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { BackButtonComponent } from "./back-button.component";
import { NgModule } from "@angular/core";



@NgModule({
  declarations: [BackButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,],
  //Exporto mi componente, si no lo hago otros componentes no pueden detectar este!!!!
  exports: [BackButtonComponent]
})
export class BackButtonModule {}