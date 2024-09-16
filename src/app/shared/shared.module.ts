import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderMenuComponent } from '../components/header-menu/header-menu.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent,HeaderMenuComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderComponent, FooterComponent,HeaderMenuComponent]
})
export class SharedModule { }
