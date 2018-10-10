import {Component, Input} from '@angular/core';
import {IChannel} from '../models/channel.model';
import {MatDialog} from '@angular/material';
import {CreateGroupConversationDialogComponent} from '../dialogs/create-group-conversation-dialog/create-group-conversation-dialog.component';

@Component({
  selector: 'chatter-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.scss']
})
export class ChannelsListComponent {
  @Input() channels: IChannel[] = null;

  constructor(private _dialog: MatDialog) { }

  createGroupConversation(): void {
    this._dialog.open(CreateGroupConversationDialogComponent, { width: '60rem' });
  }

}
