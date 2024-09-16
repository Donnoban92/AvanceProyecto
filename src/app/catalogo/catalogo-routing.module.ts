import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoPage } from './catalogo.page';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderMenuComponent } from '../components/header-menu/header-menu.component';

const routes: Routes = [
  {
    path: '', component: CatalogoPage
  },
  {
    path: 'header-menu', component: HeaderMenuComponent
  },
  {
  path: 'header', component: HeaderComponent
  },
  {
    path: 'footer', component: FooterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogoPageRoutingModule {}
