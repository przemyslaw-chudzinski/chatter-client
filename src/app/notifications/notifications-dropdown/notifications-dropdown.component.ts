import {Component} from '@angular/core';
import {ChatterState} from '../../chatter-store/chatter-store.state';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectNotificationsNumber} from '../notifications-store/notifications-store.selectors';
import {MatDialog} from '@angular/material';
import {NotificationsListComponent} from '../dialogs/notifications-list/notifications-list.component';

@Component({
  selector: 'chatter-notifications-dropdown',
  templateUrl: './notifications-dropdown.component.html',
  styleUrls: ['./notifications-dropdown.component.scss']
})
export class NotificationsDropdownComponent {

  notificatonsNumber$: Observable<number> = this._store.pipe(select(selectNotificationsNumber));

  constructor(
    private _store: Store<ChatterState>,
    private _dialog: MatDialog
  ) {}

  open(): void {
    this._dialog.open(NotificationsListComponent);
  }

}
