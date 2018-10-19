import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChannelsListComponent} from './channels-list/channels-list.component';
import { ChannelComponent } from './channel/channel.component';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import { CreateGroupConversationDialogComponent } from './dialogs/create-group-conversation-dialog/create-group-conversation-dialog.component';
import {FormLayersModule} from '../form-layers/form-layers.module';
import {SpinnerModule} from '../spinner/spinner.module';
import {ChannelsStoreModule} from './channels-store/channels-store.module';
import {NotificationsModule} from '../notifications/notifications.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    FormLayersModule,
    SpinnerModule,
    ChannelsStoreModule,
    NotificationsModule
  ],
  declarations: [ChannelsListComponent, ChannelComponent, CreateGroupConversationDialogComponent],
  exports: [ChannelsListComponent],
  entryComponents: [CreateGroupConversationDialogComponent]
})
export class ChannelsModule { }
