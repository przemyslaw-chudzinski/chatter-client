import { Injectable } from '@angular/core';
import {ChatterHttpClient} from '../chatter-http/chatter-http-client';
import {Observable} from 'rxjs';
import {notificationsEndpoints} from '../chatter-http/http-endpoints';
import {IResponseData} from '../chatter-http/models/response-data';
import {INotification} from './models/notification.model';
import {INotificationNumber} from './models/notification-number.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsApiService {

  constructor(
    private _httpClient: ChatterHttpClient
  ) {}

  getNotifications(): Observable<IResponseData<INotification[]>> {
    return this._httpClient.get<IResponseData<INotification[]>>(notificationsEndpoints.notificationsEndpoint);
  }

  getNotificationsNumber(): Observable<INotificationNumber> {
    return this._httpClient.get<INotificationNumber>(notificationsEndpoints.countNotificationsEndpoint);
  }

  markNotificationsAsRead(): Observable<any> {
    return this._httpClient.post<any>(notificationsEndpoints.markAsReadNotificationsEndpoint, null);
  }
}
