import {Action} from '@ngrx/store';
import {INotification} from '../models/notification.model';
import {INotificationNumber} from '../models/notification-number.model';

export enum notificationsActionTypes {
  LoadNotifications = '[Notifications] Load Notifications',
  LoadNotificationsSuccess = '[Notifications] Load Notifications Success',
  LoadNotificationsError = '[Notifications] Load Notifications Error',

  LoadNotificationsNumber = '[Notifications] Load  Notifications Number',
  LoadNotificationsNumberSuccess = '[Notifications] Load  Notifications Number Success',
  LoadNotificationsNumberError = '[Notifications] Load  Notifications Number Error',

  ResetNotificationsNumber = '[Notifications] Reset Notifications Number'
}

/* Load Notifications Actions */
export class LoadNotificationsActon implements Action {
  readonly type = notificationsActionTypes.LoadNotifications;
  constructor() {}
}

export class LoadNotificationsSuccessActon implements Action {
  readonly type = notificationsActionTypes.LoadNotificationsSuccess;
  constructor(public payload: INotification[]) {}
}

export class LoadNotificationsErrorActon implements Action {
  readonly type = notificationsActionTypes.LoadNotificationsError;
  constructor(public payload: any) {}
}
/***********************************************************/

/* Load  Notifications Number */
export class LoadNotificationsNumberAction implements Action {
  readonly type = notificationsActionTypes.LoadNotificationsNumber;
  constructor() {}
}

export class LoadNotificationsNumberSuccessAction implements Action {
  readonly type = notificationsActionTypes.LoadNotificationsNumberSuccess;
  constructor(public payload: number) {}
}

export class LoadNotificationsNumberErrorAction implements Action {
  readonly type = notificationsActionTypes.LoadNotificationsNumberError;
  constructor(public payload: any) {}
}
/***********************************************************/

/* Reset notifications number action */
export class ResetNotificationsNumberAction implements Action {
  readonly type = notificationsActionTypes.ResetNotificationsNumber;
  constructor() {}
}
/***********************************************************/

export type NotificationsActions =
  | LoadNotificationsActon
  | LoadNotificationsSuccessActon
  | LoadNotificationsErrorActon
  | LoadNotificationsNumberAction
  | LoadNotificationsNumberSuccessAction
  | LoadNotificationsNumberErrorAction
  | ResetNotificationsNumberAction;
