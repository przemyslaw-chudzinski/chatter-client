import { Injectable } from '@angular/core';
import { ChatterHttpClient } from '../chatter-http/chatter-http-client';
import { Observable } from 'rxjs';
import { messagesEndpoints } from '../chatter-http/http-endpoints';
import {IMessage} from './models/message.model';
import {IResponseData} from '../chatter-http/models/response-data';

@Injectable()
export class MessagesApiService {
  constructor(
    private _httpClient: ChatterHttpClient
  ) {}

  getMessages(recipientId: string): Observable<IResponseData<IMessage>> {
    return this._httpClient.get<IResponseData<IMessage>>(
      messagesEndpoints.messagesEndpoint(recipientId)
    );
  }

  updateMessage(body: IMessage): Observable<IResponseData<IMessage>> {
    return this._httpClient.patch<IResponseData<IMessage>>(messagesEndpoints.updateMessageEndpoint, body);
  }

  saveMessage(body: IMessage): Observable<IResponseData<IMessage>> {
    return this._httpClient.post<IResponseData<IMessage>>(messagesEndpoints.saveMessageEndpoint, body);
  }

}
