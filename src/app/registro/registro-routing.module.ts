import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroPage } from './registro.page';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FormSigninComponent } from '../components/form-signin/form-signin.component';
import { HeaderMenuComponent } from '../components/header-menu/header-menu.component';

const routes: Routes = [
  {
    path: '',
    component: RegistroPage
  },
  {
    path: 'header', component: HeaderComponent
  },
  {
    path: 'footer', component: FooterComponent
  },
  {
    path: 'form-signin', component: FormSigninComponent
  },
  {
    path: 'header-menu', component: HeaderMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPageRoutingModule {}
