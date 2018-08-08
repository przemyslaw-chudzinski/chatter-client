import { Injectable } from '@angular/core';
import { ChatterHttpClient } from '../chatter-http/chatter-http-client';
import { Observable } from 'rxjs';
import { messagesEndpoints } from '../chatter-http/http-endpoints';
import {IMessage} from './models/message.model';
import {IResponseData} from '../models/response-data';

@Injectable()
export class MessagesApiService {
  constructor(
    private httpClient: ChatterHttpClient
  ) {}

  getMessages(recipientId: string): Observable<IResponseData<IMessage>> {
    return this.httpClient.get<IResponseData<IMessage>>(
      messagesEndpoints.messagesEndpoint(recipientId)
    );
  }

  updateMessage(messageId: string, message: IMessage): Observable<any> {
    return this.httpClient.patch<any>(messagesEndpoints.messageEndpoint(messageId), message);
  }
}
