import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {WebsocketService} from '../../../websocket/websocket.service';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, take, takeWhile, tap} from 'rxjs/operators';
import {EWebSocketActions} from '../../../websocket/enums/websocket-actions.enum';
import {AuthService} from '../../../auth/auth.service';
import {IUser} from '../../../auth/models/user.model';
import {IMessage} from '../../../messages/models/message.model';
import {select, Store} from '@ngrx/store';
import {ChatterState} from '../../../chatter-store/chatter-store.state';
import {
  CleanMessagesStoreAction,
  LoadMessagesAction,
  PushMessageAction,
  UpdateMessageAction
} from '../../../messages/messages-store/messages.actions';
import {Observable} from 'rxjs';
import {LoadUserAction} from '../../../users/users-store/users.actions';
import {selectMessages} from '../../../messages/messages-store/messages.selectors';
import {selectUser} from '../../../users/users-store/users.selectors';
import {MessagesApiService} from '../../../messages/messages-api.service';
import {IScrollEvent} from '../../../ui/ui-directives/models/scroll-event.model';
import {FileUploadComponent} from '../../../files/file-upload/file-upload.component';
import {IFile} from '../../../files/models/file.model';

@Component({
  selector: 'chatter-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit, OnDestroy {
  messages: IMessage[];
  contact: IUser;
  private _contactId: string = null;
  private _alive = true;
  messages$: Observable<IMessage[]> = this._store.pipe(select(selectMessages));
  user$: Observable<IUser> = this._store.pipe(select(selectUser));
  sending: boolean;
  private _skip = 1;
  @ViewChild(FileUploadComponent) private _uploader: FileUploadComponent;
  showFileUploader: boolean;

  get attachedFiles(): IFile[] | null {
    return this._uploader ? (this._uploader.files.length ? this._uploader.files : null) : null;
  }

  constructor(
    private _websocketService: WebsocketService,
    private _route: ActivatedRoute,
    public auth: AuthService,
    private _store: Store<ChatterState>,
    private _messagesApiService: MessagesApiService
  ) {}

  ngOnInit() {
    this._route.params.pipe(
        tap(() => (this.contact = null)),
        tap(() => (this.messages = null)),
        tap(() => this._store.dispatch(new CleanMessagesStoreAction())),
        tap(params => params && this._store.dispatch(new LoadUserAction(params.id))),
        tap(params => params && this._store.dispatch(new LoadMessagesAction(params.id))),
        tap(params => (this._contactId = params.id)),
        switchMap(params => this._messagesApiService.resetUnreadMessages(params.id)),
        switchMap(() => this._websocketService.state$),
        tap(state => state && state.connected && this._websocketService.switchToContact(this._contactId))
      ).subscribe();

    this.user$.pipe(
      takeWhile(() => this._alive),
      tap(user => (this.contact = user)),
    ).subscribe();

    this.messages$.pipe(
      takeWhile(() => this._alive),
      tap(messages => (this.messages = messages))
    ).subscribe();

    this._websocketService.onMessage$
      .pipe(
        takeWhile(() => this._alive),
        tap(event => {
          if (event && event.action === EWebSocketActions.MessageToContact && this.contact && this.contact._id === event.data.authorId) {
            const payload: IMessage = {...event.data, author: this.contact};
            this._store.dispatch(new PushMessageAction(payload));
          }
          event && event.action === EWebSocketActions.MessageUpdated && this._store.dispatch(new UpdateMessageAction(event.data));
        })
      ).subscribe();
  }

  ngOnDestroy() {
    this._alive = false;
    this._websocketService.detachContact();
  }

  // Pagination on scroll event
  handleScroll(event: IScrollEvent): void {
    // if (event.scrollTop === 0) {
    //   const recipientId = this._route.snapshot.params.id;
    //   this._store.dispatch(new LoadMoreMessagesAction(recipientId, this._skip, 15));
    //   this._skip++;
    // }
  }

  sendMessage(event: IMessage): void {
    // console.log('sendMessage', event);
    if (this.contact && event && event.content) {
      event.recipientId = this._contactId;
      this.sending = true;
      this._messagesApiService.saveMessage({recipientId: this._contactId, content: event.content, attachedFiles: this.attachedFiles})
        .pipe(
          take(1),
          map(response => response.data as IMessage),
          map(message => {
            message.author = event.author;
            return message;
          }),
          tap(() => this._uploader && this._uploader.clear()),
          tap(() => (this.showFileUploader = false)),
          tap(message => this._store.dispatch(new PushMessageAction(message))),
          tap(() => (this.sending = false))
        ).subscribe();
    }
  }
}
