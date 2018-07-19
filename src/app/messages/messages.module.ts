import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesService } from './messages.service';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageComponent } from './message/message.component';
import { MessageEditorComponent } from './message-editor/message-editor.component';
import { FormsModule } from '@angular/forms';
import { ScrollToBottomDirective } from './directives/scroll-to-bottom.directive';
import { MessageEditorDirective } from './message-editor/message-editor.directive';
import { SpinnerModule } from '../spinner/spinner.module';

@NgModule({
  imports: [CommonModule, FormsModule, SpinnerModule],
  declarations: [
    MessagesListComponent,
    MessageComponent,
    MessageEditorComponent,
    ScrollToBottomDirective,
    MessageEditorDirective
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
