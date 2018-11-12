import {Actions, Effect, ofType} from '@ngrx/effects';
import {NotificationsApiService} from '../notifications-api.service';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {LoadNotificationsNumberSuccessAction, LoadNotificationsSuccessActon, notificationsActionTypes} from './notifications-store.actions';
import {map, switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class NotificationsEffects {
  @Effect()
  loadNotifications$: Observable<Action> = this._actions$.pipe(
    ofType(notificationsActionTypes.LoadNotifications),
    switchMap(() => this._notificationsApiService.getNotifications()
      .pipe(
        map(response => response.data)
      )),
    map(notifications => new LoadNotificationsSuccessActon(notifications))
  );

  @Effect()
  loadUnreadNotificationsNumber$: Observable<Action> = this._actions$.pipe(
    ofType(notificationsActionTypes.LoadNotificationsNumber),
    switchMap(() => this._notificationsApiService.getNotificationsNumber()
      .pipe(
        map(data => data.unread)
      )),
    map(data => new LoadNotificationsNumberSuccessAction(data))
  );

  constructor(
    private _actions$: Actions,
    private _notificationsApiService: NotificationsApiService
  ) {}
}
