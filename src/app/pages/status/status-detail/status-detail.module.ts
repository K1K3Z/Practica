import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { StatusDetailPage } from './status-detail.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: StatusDetailPage }]),
  ],
  declarations: [StatusDetailPage],
})
export class StatusDetailModule {}
