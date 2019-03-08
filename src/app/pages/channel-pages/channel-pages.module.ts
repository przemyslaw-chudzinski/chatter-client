import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelPagesComponent } from './channel-pages.component';
import {RouterModule, Routes} from '@angular/router';
import { ChatPageComponent } from './chat-page/chat-page.component';
import {routerLinks} from '../../routes/router-links';

const routes: Routes = [
  {
    path: '',
    component: ChannelPagesComponent,
    children: [
      {
        path: ':id',
        component: ChatPageComponent
      },
      {
        path: '',
        redirectTo: '/' + routerLinks.dashboardPage,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChannelPagesComponent, ChatPageComponent]
})
export class ChannelPagesModule { }
