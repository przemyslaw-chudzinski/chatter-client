import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MessagesListComponent, MessageComponent],
  exports: [MessagesListComponent, MessageComponent]
})
export class MessagesModule {}
