import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { MenuMobileComponent } from "./menu-mobile.component";
import { RouterLinkWithHref } from "@angular/router";



@NgModule({
  declarations: [MenuMobileComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterLinkWithHref],
  //Exporto mi componente, si no lo hago otros componentes no pueden detectar este!!!!
  exports: [MenuMobileComponent]
})
export class MenuMobileModule {}