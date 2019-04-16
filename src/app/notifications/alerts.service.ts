import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {PrimaryNotificationComponent} from './primary-notification/primary-notification.component';

@Injectable()
export class AlertsService {

  constructor(private _snackBar: MatSnackBar) {
  }

  open(message = '', action = 'Got it!'): void {
    this._snackBar.open(message, action);
  }

  openPrimary(): void {
    this._snackBar.openFromComponent(PrimaryNotificationComponent);
  }

}


