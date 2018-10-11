import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'chatter-create-group-conversation-dialog',
  templateUrl: './create-group-conversation-dialog.component.html',
  styleUrls: ['./create-group-conversation-dialog.component.scss']
})
export class CreateGroupConversationDialogComponent {

  constructor(public dialogRef: MatDialogRef<CreateGroupConversationDialogComponent>) { }

}
