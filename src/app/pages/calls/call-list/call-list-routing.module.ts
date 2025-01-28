import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallListPage } from './call-list.page';

const routes: Routes = [
  {
    path: '',
    component: CallListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallListPageRoutingModule {}
