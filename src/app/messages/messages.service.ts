import { Injectable } from '@angular/core';
import { ChatterHttpClient } from '../chatter-http/chatter-http-client';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { messagesEndpoints } from '../chatter-http/http-endpoints';
import {IMessage} from './models/message.model';

@Injectable()
export class MessagesService {
  constructor(
    private httpClient: ChatterHttpClient
  ) {}

  getMessages$(recipientId: string): Observable<any> {
    return this.httpClient.get<any>(
      messagesEndpoints.messagesEndpoint(recipientId),
      {
        headers: {
          Authorization: 'Bearer ' + AuthService.token()
        }
      }
    );
  }

  updateMessage$(messageId: string, message: IMessage): Observable<any> {
    return this.httpClient.put<any>(messagesEndpoints.messageEndpoint(messageId), message,  {
      headers: {
        Authorization: 'Bearer ' + AuthService.token()
      }
    });
  }
}
