import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChatterState} from '../../chatter-store/chatter-store.state';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectNotificationsNumber} from '../notifications-store/notifications-store.selectors';
import {MatDialog} from '@angular/material';
import {NotificationsListComponent} from '../dialogs/notifications-list/notifications-list.component';
import {WebsocketService} from '../../websocket/websocket.service';
import {takeWhile, tap} from 'rxjs/operators';
import {EWebSocketActions} from '../../websocket/enums/websocket-actions.enum';
import {ResetNotificationStore} from '../notifications-store/notifications-store.actions';

@Component({
  selector: 'chatter-notifications-dropdown',
  templateUrl: './notifications-dropdown.component.html',
  styleUrls: ['./notifications-dropdown.component.scss']
})
export class NotificationsDropdownComponent implements OnInit, OnDestroy {

  notificationsNumber$: Observable<number> = this._store.pipe(select(selectNotificationsNumber));
  notificationsNumber: number = 0;

  private _alive = true;

  constructor(
    private _store: Store<ChatterState>,
    private _dialog: MatDialog,
    private _websocketService: WebsocketService,
  ) {}

  ngOnInit(): void {

    this.notificationsNumber$
      .pipe(
        takeWhile(() => this._alive),
        tap(notificationsNumber => (this.notificationsNumber = notificationsNumber))
      ).subscribe();

    this._websocketService.onMessage$
      .pipe(
        takeWhile(() => this._alive),
        tap(event => (event && event.action === EWebSocketActions.ReceivedNotification && this.notificationsNumber++))
      ).subscribe();
  }

  ngOnDestroy(): void {
    this._alive = false;
  }

  open(): void {
    const dialogRef = this._dialog.open(NotificationsListComponent);
    dialogRef.afterClosed()
      .subscribe(() => this._store.dispatch(new ResetNotificationStore()));
  }

}
