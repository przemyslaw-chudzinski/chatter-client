import {Component, OnInit, Inject} from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import {IMessage} from '../../models/message.model';
import {ChatterState} from '../../../chatter-store/chatter-store.state';
import {Store} from '@ngrx/store';
import {UpdateMessageAction} from '../../messages-store/messages.actions';
import {MessagesApiService} from '../../messages-api.service';
import {map, take, tap} from 'rxjs/operators';
import {WebsocketService} from '../../../websocket/websocket.service';

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
    private store: Store<ChatterState>,
    private messagesApiService: MessagesApiService,
    private _websocketService: WebsocketService
  ) {}

  ngOnInit() {
    this.messageCopy = {...this.message};
  }

  cancel(): void {
    this.dialogRef.close();
  }

  update(): void {
    this.loading = true;
    delete this.messageCopy.author;
    this.messagesApiService.updateMessage(this.messageCopy).pipe(
      take(1),
      map(response => response.data),
      tap(message => this.store.dispatch(new UpdateMessageAction(message))),
      tap(message => this._websocketService.messageUpdated(message)),
      tap(() => this.dialogRef.close())
    ).subscribe();
  }

  contentChangesHandler(event: string): void {
    this.messageCopy.content = event;
  }
}
