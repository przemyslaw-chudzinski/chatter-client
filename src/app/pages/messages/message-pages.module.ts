import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagePagesComponent } from './message-pages.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { Routes, RouterModule } from '@angular/router';
import { MessagesModule } from '../../messages/messages.module';

const routes: Routes = [
  {
    path: '',
    component: MessagePagesComponent,
    children: [
      {
        path: ':id',
        component: ChatPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), MessagesModule],
  declarations: [MessagePagesComponent, ChatPageComponent]
})
export class MessagePagesModule {}
