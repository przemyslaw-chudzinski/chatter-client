import { Injectable } from '@angular/core';
import { ChatterHttpClient } from '../chatter-http/chatter-http-client';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { messagesEndpoints } from '../chatter-http/http-endpoints';

@Injectable()
export class MessagesService {
  constructor(
    private httpClient: ChatterHttpClient,
    private auth: AuthService
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

  updateMessage$(messageId: string): Observable<any> {
    return this.httpClient.post('', {
      headers: {
        Authorization: 'Bearer ' + AuthService.token()
      }
    });
  }
}
