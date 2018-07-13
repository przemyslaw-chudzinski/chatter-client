import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageComponent } from './message/message.component';
import { MessageEditorComponent } from './message-editor/message-editor.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    MessagesListComponent,
    MessageComponent,
    MessageEditorComponent
  ],
  exports: [MessagesListComponent, MessageComponent, MessageEditorComponent]
})
export class MessagesModule {}
