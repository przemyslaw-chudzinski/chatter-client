import { Injectable } from '@angular/core';
import {ChatterHttpClient} from '../chatter-http/chatter-http-client';
import {Observable} from 'rxjs';
import {notificationsEndpoints} from '../chatter-http/http-endpoints';

@Injectable({
  providedIn: 'root'
})
export class NotificationsApiService {

  constructor(
    private _httpClient: ChatterHttpClient
  ) { }

  getNotifications(): Observable<any> {
    return this._httpClient.get<any>(notificationsEndpoints.notificationsEndpoint);
  }
}
