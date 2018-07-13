import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessagesIndexComponent } from './messages-index/messages-index.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: MessagesComponent,
    children: [
      {
        path: ':id',
        component: MessagesIndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule],
  declarations: [MessagesComponent, MessagesIndexComponent]
})
export class MessagesModule {}
