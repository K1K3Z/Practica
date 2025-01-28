import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallListPageRoutingModule } from './call-list-routing.module';

import { CallListPage } from './call-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallListPageRoutingModule
  ],
  declarations: [CallListPage]
})
export class CallListPageModule {}
