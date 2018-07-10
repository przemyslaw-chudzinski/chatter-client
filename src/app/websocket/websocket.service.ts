import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from '../../../node_modules/rxjs';
import { IWebSocketData } from './models/websocket-payload.model';
import { EWebSocketActions } from './enums/websocket-actions.enum';

@Injectable()
export class WebsocketService {
  private _ws: WebSocket;
  private _onMessage$: BehaviorSubject<IWebSocketData> = new BehaviorSubject<
    IWebSocketData
  >(null);
  private _userId: string;

  get onMessage$(): Observable<any> {
    return this._onMessage$;
  }

  constructor() {
    if (!WebSocket) {
      // tslint:disable-next-line:quotemark
      throw new Error("Your browser does0n't support WebSocket");
    }
  }

  set userId(userId: string) {
    console.log('set user id', userId);
    this._userId = userId;
  }

  connect(userId: string): void {
    this._ws = new WebSocket('ws://localhost:8000');
    this._ws.onopen = this.onOpenHandler.bind(this, userId);
    this._ws.onmessage = this.onMessageHandler.bind(this);
    // this._ws.onclose = this.onCloseHandler.bind(this, userId);
  }

  disconnect(userId: string): void {
    this.send({
      action: EWebSocketActions.UserLoggedOut,
      userId: userId
    });
  }

  sendMessage(message: string, contactId: string): void {
    // tslint:disable-next-line:no-unused-expression
    this._userId &&
      this.send({
        action: EWebSocketActions.MessageToContact,
        userId: this._userId,
        contactId: contactId,
        data: 'message from user ' + this._userId
      });
  }

  private onOpenHandler(userId: string, event: any): void {
    this.send({
      action: EWebSocketActions.UserLogged,
      userId: userId
    });
  }

  private onMessageHandler(event: any): void {
    const data = JSON.parse(event.data);
    this._onMessage$.next(data);
  }

  // private onCloseHandler(userId: string, event: any): void {
  //   this.send({
  //     action: 'USER_LOGGED_OUT',
  //     userId: userId
  //   });
  // }

  private send(data: IWebSocketData): void {
    if (typeof data === 'object') {
      this._ws.send(JSON.stringify(data));
    } else {
      this._ws.send(data);
    }
  }
}
