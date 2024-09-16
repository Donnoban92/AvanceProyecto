import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioSesionPage } from './inicio-sesion.page';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FormLoginComponent } from '../components/form-login/form-login.component';
import { HeaderMenuComponent } from '../components/header-menu/header-menu.component';

const routes: Routes = [
  {
    path: '',
    component: InicioSesionPage
  },
  {
    path: 'header', component: HeaderComponent
  },
  {
    path: 'footer', component: FooterComponent
  },
  {
    path: 'header-menu', component: HeaderMenuComponent
  },
  {
    path: 'form-login', component: FormLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioSesionPageRoutingModule {}
