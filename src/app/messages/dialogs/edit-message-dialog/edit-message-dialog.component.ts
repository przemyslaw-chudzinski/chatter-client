import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import {IMessage} from '../../models/message.model';
import {ChatterState} from '../../../chatter-store/chatter-store.state';
import {Store} from '@ngrx/store';
import {UpdateMessageAction} from '../../messages-store/messages.actions';

@Component({
  selector: 'chatter-edit-message-dialog',
  templateUrl: './edit-message-dialog.component.html',
  styleUrls: ['./edit-message-dialog.component.scss']
})
export class EditMessageDialogComponent implements OnInit {
  messageCopy: IMessage;

  loading: boolean;

  constructor(
    private dialogRef: MatDialogRef<EditMessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: IMessage,
    private store: Store<ChatterState>
  ) {}

  ngOnInit() {
    this.messageCopy = {...this.message};
  }

  cancel(): void {
    this.dialogRef.close();
  }

  update(): void {
    this.loading = true;
    this.store.dispatch(new UpdateMessageAction(this.messageCopy));
  }

  contentChangesHandler(event: string): void {
    this.messageCopy.content = event;
  }
}
