import {IUser} from '../../auth/models/user.model';
import {Action} from '@ngrx/store';

export enum usersActionTypes {
  LoadUsers = '[Users] Load Users',
  LoadUsersSuccess = '[Users] Load Users Success',
  LoadUsersError = '[Users] Load Users Error',

  LoadUser = '[Users] Load User',
  LoadUserSuccess = '[Users] Load User Success',
  LoadUserError = '[Users] Load User Error'
}

/* Load Users Actions */
export class LoadUsersAction implements Action {
  readonly type = usersActionTypes.LoadUsers;
  constructor() {}
}

export class LoadUsersSuccessAction implements Action {
  readonly type = usersActionTypes.LoadUsersSuccess;
  constructor(public payload: IUser[]) {}
}

export class LoadUsersErrorAction implements Action {
  readonly type = usersActionTypes.LoadUsersError;
  constructor(public payload: any) {}
}
/***********************************************************/

/* Load User Actions */
export class LoadUserAction implements Action {
  readonly type = usersActionTypes.LoadUser;
  constructor(public payload: string) {}
}

export class LoadUserSuccessAction implements Action {
  readonly type = usersActionTypes.LoadUserSuccess;
  constructor(public payload: IUser) {}
}

export class LoadUserErrorAction implements Action {
  readonly type = usersActionTypes.LoadUserError;
  constructor(public payload: any) {}
}
/***********************************************************/

export type UsersActions =
  | LoadUsersAction
  | LoadUsersSuccessAction
  | LoadUsersErrorAction
  | LoadUserAction
  | LoadUserSuccessAction
  | LoadUserErrorAction;
