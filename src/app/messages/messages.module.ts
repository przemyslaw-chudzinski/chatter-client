import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesApiService } from './messages-api.service';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageComponent } from './message/message.component';
import { MessageEditorComponent } from './message-editor/message-editor.component';
import { FormsModule } from '@angular/forms';
import { ScrollToBottomDirective } from './directives/scroll-to-bottom.directive';
import { MessageEditorDirective } from './message-editor/message-editor.directive';
import { SpinnerModule } from '../spinner/spinner.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { EditMessageDialogComponent } from './dialogs/edit-message-dialog/edit-message-dialog.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MessagesStoreModule} from './messages-store/messages-store.module';
import {MessagesEventsService} from './messages-events.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatChipsModule,
    MatTooltipModule,
    MessagesStoreModule
  ],
  declarations: [
    MessagesListComponent,
    MessageComponent,
    MessageEditorComponent,
    ScrollToBottomDirective,
    MessageEditorDirective,
    EditMessageDialogComponent
  ],
  exports: [MessagesListComponent, MessageComponent, MessageEditorComponent],
  entryComponents: [EditMessageDialogComponent]
})
export class MessagesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MessagesModule,
      providers: [MessagesApiService, MessagesEventsService]
    };
  }
}
