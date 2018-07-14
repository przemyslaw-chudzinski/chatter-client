import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesService } from './messages.service';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageComponent } from './message/message.component';
import { MessageEditorComponent } from './message-editor/message-editor.component';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [CommonModule, FormsModule, LayoutModule],
  declarations: [
    MessagesListComponent,
    MessageComponent,
    MessageEditorComponent
  ],
  exports: [MessagesListComponent, MessageComponent, MessageEditorComponent]
})
export class MessagesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MessagesModule,
      providers: [MessagesService]
    };
  }
}
