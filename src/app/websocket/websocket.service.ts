import {EventEmitter, Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IWebSocketData } from './models/websocket-payload.model';
import { EWebSocketActions } from './enums/websocket-actions.enum';

@Injectable()
export class WebsocketService {
  private _ws: WebSocket;
  private _onMessage$: BehaviorSubject<IWebSocketData> = new BehaviorSubject<
    IWebSocketData
  >(null);
  private _userId: string;

  onOpen = new EventEmitter<any>();

  get onMessage$(): Observable<any> {
    return this._onMessage$;
  }

  constructor() {
    if (!WebSocket) {
      throw new Error('Your browser doesn\'t support WebSocket');
    }
  }

  set userId(userId: string) {
    this._userId = userId;
  }

  connect(userId: string): void {
    this._ws = new WebSocket('ws://localhost:8000');
    this._ws.onopen = this.onOpenHandler.bind(this, userId);
    this._ws.onmessage = this.onMessageHandler.bind(this);
    this._ws.onerror = () => console.log('on error');
    this._ws.onclose = () => console.log('on close');
  }

  disconnect(userId: string): void {
    this.send({
      action: EWebSocketActions.UserLoggedOut,
      userId: userId
    });
  }

  sendMessage(message: string, contactId: string): void {
    // tslint:disable-next-line:no-unused-expression
    this.onOpen.emit();
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
    // tslint:disable-next-line:no-unused-expression
    this._userId &&
      contactId &&
      this.send({
        action: EWebSocketActions.SwitchedToContact,
        contactId: contactId,
        userId: this._userId
      });
  }

  private onOpenHandler(userId: string, event: any): void {
    // this._opend = true;
    this.send({
      action: EWebSocketActions.UserLogged,
      userId: userId
    });
  }

  private onMessageHandler(event: any): void {
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
