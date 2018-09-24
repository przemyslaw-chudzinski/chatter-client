import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {IWebSocketData} from './models/websocket-payload.model';
import {EWebSocketActions} from './enums/websocket-actions.enum';
import {IWebsocketState} from './models/websocket-state.model';
import {IMessage} from '../messages/models/message.model';

@Injectable()
export class WebsocketService {
  private _ws: WebSocket = null;
  private _onMessage$: BehaviorSubject<IWebSocketData> = new BehaviorSubject<
    IWebSocketData
  >(null);
  private _userId: string;
  private _state = new BehaviorSubject<IWebsocketState>(null);

  get state$(): Observable<IWebsocketState> {
    return this._state.asObservable();
  }

  get onMessage$(): Observable<any> {
    return this._onMessage$;
  }

  constructor() {
    if (!WebSocket) {
      throw new Error('Your browser doesn\'t support WebSocket');
    }
  }

  connect(userId: string): void {
    this._userId = userId;
    this._ws = this._ws || new WebSocket('ws://localhost:8000');
    this._ws.onopen = this._ws && this.onOpenHandler.bind(this, userId);
    this._ws.onmessage = this._ws && this.onMessageHandler.bind(this);
    this._ws.onerror = () => console.log('on error');
    this._ws.onclose = () => console.log('on close');
  }

  disconnect(userId: string): void {
    this.send({
      action: EWebSocketActions.UserLoggedOut,
      userId: userId
    });
    this._ws = null;
  }

  sendMessage(message: IMessage): void {
    this._ws &&
    this._userId &&
      this.send({
        action: EWebSocketActions.MessageToContact,
        data: message
      });
  }

  switchToContact(contactId: string): void {
    console.log('switch to contact');
    this._ws &&
    this._userId &&
      contactId &&
      this.send({
        action: EWebSocketActions.SwitchedToContact,
        contactId: contactId,
        userId: this._userId
      });
  }

  emitUserLogged(userId): void {
    console.log('emitUserLogged', userId);
    this.send({
      action: EWebSocketActions.UserLogged,
      userId: userId
    });
  }

  messageUpdated(message: IMessage): void {
    console.log('messageUpdated');
    this.send({
      action: EWebSocketActions.MessageUpdated,
      data: message
    });
  }

  private onOpenHandler(userId: string, event: any): void {
    console.log('onOpenHandler');
    this._state.next({connectedUserId: userId, connected: true});
    this.emitUserLogged(userId);
  }

  private onMessageHandler(event: any): void {
    console.log(event.data);
    const data = JSON.parse(event.data);
    this._onMessage$.next(data);
  }

  private send(data: IWebSocketData): void {
    if (typeof data === 'object') {
      this._ws.send(JSON.stringify(data));
    } else {
      this._ws.send(data);
    }
  }
}
