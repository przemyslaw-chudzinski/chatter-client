import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ChatterState} from '../../../chatter-store/chatter-store.state';
import {Observable} from 'rxjs';
import {INotification} from '../../models/notification.model';
import {selectNotifications} from '../../notifications-store/notifications-store.selectors';
import {LoadNotificationsActon} from '../../notifications-store/notifications-store.actions';

@Component({
  selector: 'chatter-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss']
})
export class NotificationsListComponent implements OnInit {

  notifications$: Observable<INotification[]> = this._store.pipe(select(selectNotifications));

  constructor(
    private _store: Store<ChatterState>,
  ) { }

  ngOnInit() {
    this._store.dispatch(new LoadNotificationsActon());
  }

}
