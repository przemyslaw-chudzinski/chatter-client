import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import {IMessage} from '../../models/message.model';
import {MessagesService} from '../../messages.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'chatter-edit-message-dialog',
  templateUrl: './edit-message-dialog.component.html',
  styleUrls: ['./edit-message-dialog.component.scss']
})
export class EditMessageDialogComponent implements OnInit {
  messageCopy: IMessage;

  constructor(
    private dialogRef: MatDialogRef<EditMessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: IMessage,
    private messagesService: MessagesService
  ) {}

  ngOnInit() {
    this.messageCopy = {...this.message};
  }

  cancel(): void {
    this.dialogRef.close();
  }

  update(): void {
    this.messagesService.updateMessage$(this.messageCopy._id, this.message).pipe(
      take(1)
    ).subscribe();
  }

  contentChangesHandler(event: string): void {
    this.messageCopy.content = event;
  }
}
