import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarRef, SimpleSnackBar} from '@angular/material';
import {PrimaryNotificationComponent} from './primary-notification/primary-notification.component';

@Injectable()
export class AlertsService {

  constructor(private _snackBar: MatSnackBar) {}

  open(message = '', action = 'Got it!'): void {
    this._snackBar.open(message, action);
  }

  success(message = '', action = 'Got it!'): MatSnackBarRef<SimpleSnackBar> {
    return this._snackBar.open(message, action);
  }

  warning(message = '', action = 'Got it!'): MatSnackBarRef<SimpleSnackBar> {
    return this._snackBar.open(message, action);
  }

  error(message = '', action = 'Got it!'): MatSnackBarRef<SimpleSnackBar> {
    return this._snackBar.open(message, action);
  }

  info(message = '', action = 'Got it!'): MatSnackBarRef<SimpleSnackBar> {
    return this._snackBar.open(message, action);
  }

  openPrimary(): void {
    this._snackBar.openFromComponent(PrimaryNotificationComponent);
  }

}


