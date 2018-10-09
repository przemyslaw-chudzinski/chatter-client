import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChannelsListComponent} from './channels-list/channels-list.component';
import { ChannelComponent } from './channel/channel.component';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import { CreateGroupConversationDialogComponent } from './dialogs/create-group-conversation-dialog/create-group-conversation-dialog.component';
import {FormLayersModule} from '../form-layers/form-layers.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    FormLayersModule
  ],
  declarations: [ChannelsListComponent, ChannelComponent, CreateGroupConversationDialogComponent],
  exports: [ChannelsListComponent],
  entryComponents: [CreateGroupConversationDialogComponent]
})
export class ChannelsModule { }
