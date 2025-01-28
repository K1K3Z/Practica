import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'chats',
        loadChildren: () =>
          import('../chats/chat-list/chat-list.module').then(
            (m) => m.ChatListPageModule
          ),
      },
      {
        path: 'status',
        loadChildren: () =>
          import('../status/status-list/status-list.module').then(
            (m) => m.StatusListModule
          ),
      },
      {
        path: 'calls',
        loadChildren: () =>
          import('../calls/call-list/call-list.module').then(
            (m) => m.CallListPageModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      { path: '', redirectTo: 'chats', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
