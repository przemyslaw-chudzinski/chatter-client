import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from '../../../websocket/websocket.service';
import { ActivatedRoute } from '@angular/router';
import {tap, takeWhile, switchMap} from 'rxjs/operators';
import { EWebSocketActions } from '../../../websocket/enums/websocket-actions.enum';
import { AuthService } from '../../../auth/auth.service';
import { IUser } from '../../../auth/models/user.model';
import { IMessage } from '../../../messages/models/message.model';
import {select, Store} from '@ngrx/store';
import {ChatterState} from '../../../chatter-store/chatter-store.state';
import {CleanMessagesStoreAction, LoadMessagesAction, PushMessageAction} from '../../../messages/messages-store/messages.actions';
import {Observable} from 'rxjs';
import {LoadUserAction} from '../../../users/users-store/users.actions';
import {selectMessages} from '../../../messages/messages-store/messages.selectors';
import {selectUser} from '../../../users/users-store/users.selectors';

@Component({
  selector: 'chatter-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit, OnDestroy {
  messages: IMessage[];
  contact: IUser;
  private alive = true;
  messages$: Observable<IMessage[]> = this._store.pipe(select(selectMessages));
  user$: Observable<IUser> = this._store.pipe(select(selectUser));
  private _params;

  constructor(
    private _websocketService: WebsocketService,
    private _route: ActivatedRoute,
    public auth: AuthService,
    private _store: Store<ChatterState>
  ) {}

  ngOnInit() {

    this.user$.pipe(
      takeWhile(() => this.alive),
      tap(user => (this.contact = user))
    ).subscribe();

    this.messages$.pipe(
      takeWhile(() => this.alive),
      tap(messages => (this.messages = messages))
    ).subscribe();

    this._websocketService.onMessage$
      .pipe(
        takeWhile(() => this.alive),
        tap(event => {
          if (
            event &&
            event._action === EWebSocketActions.MessageToContact &&
            this.contact &&
            this.contact._id === event.contactId
          ) {
            this._store.dispatch(new PushMessageAction({
              content: event.data,
              author: this.contact
            }));
          }
        })
      )
      .subscribe();

    this._route.params
      .pipe(
        takeWhile(() => this.alive),
        tap(() => (this.contact = null)),
        tap(() => (this.messages = null)),
        tap(() => this._store.dispatch(new CleanMessagesStoreAction())),
        tap(params => params && this._store.dispatch(new LoadUserAction(params.id))),
        tap(params => params && this._store.dispatch(new LoadMessagesAction(params.id))),
        tap(params => (this._params = params)),
        switchMap(() => this._websocketService.onOpen),
        tap(() => this._websocketService.switchToContact(this._params.id))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.alive = false;
  }

  sendMessage(event: IMessage): void {
    this.contact &&
    event &&
    event.content &&
    this._websocketService.sendMessage(event.content, this.contact._id);
    this._store.dispatch(new PushMessageAction(event));
  }
}
