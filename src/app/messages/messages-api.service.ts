import { Injectable } from '@angular/core';
import { ChatterHttpClient } from '../chatter-http/chatter-http-client';
import { Observable } from 'rxjs';
import { messagesEndpoints } from '../chatter-http/http-endpoints';
import {IMessage} from './models/message.model';
import {IResponseData} from '../chatter-http/models/response-data';
import {IUnreadMessage} from './models/unread-message.model';

@Injectable()
export class MessagesApiService {
  constructor(
    private _httpClient: ChatterHttpClient
  ) {}

  getMessages(recipientId: string, skip = 0, take = 30): Observable<IResponseData<IMessage[]>> {
    return this._httpClient.get<IResponseData<IMessage[]>>(
      messagesEndpoints.messagesEndpoint(recipientId),
      {params: {take, skip}}
    );
  }

  updateMessage(body: IMessage): Observable<IResponseData<IMessage>> {
    return this._httpClient.patch<IResponseData<IMessage>>(messagesEndpoints.updateMessageEndpoint, body);
  }

  saveMessage(body: IMessage): Observable<IMessage> {
    return this._httpClient.post<IMessage>(messagesEndpoints.saveMessageEndpoint, body);
  }

  getUnreadMessages(): Observable<IResponseData<IUnreadMessage[]>> {
    return this._httpClient.get<IResponseData<IUnreadMessage[]>>(messagesEndpoints.unreadMessagesEndpoint);
  }

  resetUnreadMessages(contactId: string): Observable<any> {
    return this._httpClient.patch<any>(messagesEndpoints.resetUnreadMessagesEndpoint(contactId), null);
  }

}
