import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChatterState} from '../../../chatter-store/chatter-store.state';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {INotification} from '../../models/notification.model';
import {selectNotifications} from '../../notifications-store/notifications-store.selectors';
import {LoadNotificationsActon} from '../../notifications-store/notifications-store.actions';
import {takeWhile, tap} from 'rxjs/operators';

@Component({
  selector: 'chatter-notifications-dropdown-content',
  templateUrl: './notifications-dropdown-content.component.html',
  styleUrls: ['./notifications-dropdown-content.component.scss']
})
export class NotificationsDropdownContentComponent implements OnInit, OnDestroy {
  private _notifications$: Observable<INotification[]> = this._store.pipe(select(selectNotifications));
  private _alive = true;
  notifications: INotification[] = null;

  constructor(
    private _store: Store<ChatterState>
  ) { }

  ngOnInit() {
    this._store.dispatch(new LoadNotificationsActon());

    this._notifications$
      .pipe(
        takeWhile(() => this._alive),
        tap(notifications => (this.notifications = notifications))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this._alive = false;
  }

}
