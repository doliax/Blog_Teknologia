import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostPageRoutingModule } from './post-routing.module';

import { PostPage } from './post.page';
import { BackButtonComponent } from 'src/app/reutilizables/back-button/back-button.component';
import { BackButtonModule } from 'src/app/reutilizables/back-button/back-button.module';
import { MenuModule } from 'src/app/reutilizables/menu/menu.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostPageRoutingModule,
    BackButtonModule,
    MenuModule
    
  ],
  declarations: [PostPage],
  exports: []
})
export class PostPageModule {}