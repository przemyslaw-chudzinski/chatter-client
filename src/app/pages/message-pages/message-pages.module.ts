import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagePagesComponent } from './message-pages.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { Routes, RouterModule } from '@angular/router';
import { MessagesModule } from '../../messages/messages.module';
import {routerLinks} from '../../routes/router-links';
import {UiModule} from '../../ui/ui.module';
import {FilesModule} from '../../files/files.module';
import {MatButtonModule} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: MessagePagesComponent,
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
    RouterModule.forChild(routes),
    MessagesModule,
    UiModule,
    FilesModule,
    MatButtonModule
  ],
  declarations: [MessagePagesComponent, ChatPageComponent]
})
export class MessagePagesModule {}
