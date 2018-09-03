import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { IWebSocketData } from './models/websocket-payload.model';
import { EWebSocketActions } from './enums/websocket-actions.enum';

@Injectable()
export class WebsocketService {
  private _ws: WebSocket = null;
  private _onMessage$: BehaviorSubject<IWebSocketData> = new BehaviorSubject<
    IWebSocketData
  >(null);
  private _userId: string;

  onOpen = new EventEmitter<any>();

  get onMessage$(): Observable<any> {
    return this._onMessage$;
  }

  constructor() {
    console.log('ws constructor');
    if (!WebSocket) {
      throw new Error('Your browser doesn\'t support WebSocket');
    }
  }

  connect(userId: string): void {
    console.log('connect');
    this._userId = userId;
    this._ws = this._ws || new WebSocket('ws://localhost:8000');
    this._ws.onopen = this._ws && this.onOpenHandler.bind(this, userId);
    this._ws.onmessage = this._ws && this.onMessageHandler.bind(this);
    this._ws.onerror = () => console.log('on error');
    this._ws.onclose = () => console.log('on close');
  }

  disconnect(userId: string): void {
    console.log('disconnect');
    this.send({
      action: EWebSocketActions.UserLoggedOut,
      userId: userId
    });
  }

  sendMessage(message: string, contactId: string): void {
    console.log('sendMessage');
    this._ws &&
    this._userId &&
      contactId &&
      this.send({
        action: EWebSocketActions.MessageToContact,
        userId: this._userId,
        contactId: contactId,
        data: message
      });
  }

  switchToContact(contactId: string): void {
    console.log('switchToContact', contactId);
    this._ws &&
    this._userId &&
      contactId &&
      this.send({
        action: EWebSocketActions.SwitchedToContact,
        contactId: contactId,
        userId: this._userId
      });
  }

  private onOpenHandler(userId: string, event: any): void {
    console.log('onOpenHandler xdxdxd', userId);
    this.onOpen.emit({userId});
    this.send({
      action: EWebSocketActions.UserLogged,
      userId: userId
    });
  }

  private onMessageHandler(event: any): void {
    console.log('onMessageHandler');
    const data = JSON.parse(event.data);
    this._onMessage$.next(data);
  }

  private send(data: IWebSocketData): void {
    console.log('send');
    if (typeof data === 'object') {
      this._ws.send(JSON.stringify(data));
    } else {
      this._ws.send(data);
    }
  }
}
