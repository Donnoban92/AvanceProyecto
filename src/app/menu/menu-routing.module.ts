import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderMenuComponent } from '../components/header-menu/header-menu.component';


const routes: Routes = [
  {
    path: '',
    component: MenuPage
  },
  {
    path: 'header', component: HeaderComponent
  },
  {
    path: 'footer', component:FooterComponent
  },
  {
    path: 'header-menu', component: HeaderMenuComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
