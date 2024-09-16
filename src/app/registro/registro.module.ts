import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroPageRoutingModule } from './registro-routing.module';
import { RegistroPage } from './registro.page';
import { SharedModule } from '../shared/shared.module';
import { FormSigninComponent } from '../components/form-signin/form-signin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    SharedModule
  ],
  declarations: [RegistroPage, FormSigninComponent]
})
export class RegistroPageModule {}
