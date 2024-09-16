import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElHeaderPageRoutingModule } from './el-header-routing.module';

import { ElHeaderPage } from './el-header.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElHeaderPageRoutingModule,
    SharedModule
  ],
  declarations: [ElHeaderPage]
})
export class ElHeaderPageModule {}
