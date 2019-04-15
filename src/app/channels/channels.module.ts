import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChannelsListComponent} from './channels-list/channels-list.component';
import { ChannelComponent } from './channel/channel.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatRippleModule
} from '@angular/material';
import { CreateGroupConversationDialogComponent } from './dialogs/create-group-conversation-dialog/create-group-conversation-dialog.component';
import {FormLayersModule} from '../form-layers/form-layers.module';
import {ChannelsStoreModule} from './channels-store/channels-store.module';
import {NotificationsModule} from '../notifications/notifications.module';
import {UiModule} from '../ui/ui.module';
import { OnlyConfirmedPipe } from './filters/only-confirmed.pipe';
import {RouterModule} from '@angular/router';
import { GoToChannelPageDirective } from './directives/go-to-channel-page.directive';
import { ChannelMembersListComponent } from './channel-members-list/channel-members-list.component';
import { ChannelMembersListMenuComponent } from './channel-members-list/channel-members-list-menu/channel-members-list-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    FormLayersModule,
    UiModule,
    ChannelsStoreModule,
    NotificationsModule,
    RouterModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatRippleModule
  ],
  declarations: [
    ChannelsListComponent,
    ChannelComponent,
    CreateGroupConversationDialogComponent,
    OnlyConfirmedPipe,
    GoToChannelPageDirective,
    ChannelMembersListComponent,
    ChannelMembersListMenuComponent
  ],
  exports: [ChannelsListComponent, GoToChannelPageDirective, ChannelMembersListComponent],
  entryComponents: [CreateGroupConversationDialogComponent]
})
export class ChannelsModule { }
