import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElHeaderPage } from './el-header.page';
import { HeaderMenuComponent } from '../components/header-menu/header-menu.component';

const routes: Routes = [
  {
    path: '',
    component: ElHeaderPage
  },
  {
    path: 'header-menu', component: HeaderMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElHeaderPageRoutingModule {}
