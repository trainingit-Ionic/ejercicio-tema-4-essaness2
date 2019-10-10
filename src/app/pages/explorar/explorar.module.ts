import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { ExplorarPageRoutingModule } from './explorar.route.module';


import { ExplorarPage } from './explorar.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplorarPageRoutingModule
  ],
  declarations: [ExplorarPage]
})
export class ExplorarPageModule {}
