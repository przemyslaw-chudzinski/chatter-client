import {IUser} from '../../auth/models/user.model';
import {Action} from '@ngrx/store';
import {IFile} from '../../files/models/file.model';

export enum usersActionTypes {
  LoadUsers = '[Users] Load Users',
  LoadUsersSuccess = '[Users] Load Users Success',
  LoadUsersError = '[Users] Load Users Error',

  LoadUser = '[Users] Load User',
  LoadUserSuccess = '[Users] Load User Success',
  LoadUserError = '[Users] Load User Error',

  LoadUserAvatar = '[Users] Load User Avatar',
  LoadUserAvatarSuccess = '[Users] Load User Avatar Success',
  LoadUserAvatarError = '[Users] Load User Avatar Error'
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

/* Load User Avatar Actions */
export class LoadUserAvatarAction implements Action {
  readonly type = usersActionTypes.LoadUserAvatar;
  constructor() {}
}

export class LoadUserAvatarSuccessAction implements Action {
  readonly type = usersActionTypes.LoadUserAvatarSuccess;
  constructor(public payload: IFile) {}
}

export class LoadUserAvatarErrorAction implements Action {
  readonly type = usersActionTypes.LoadUserAvatarError;
  constructor(public payload: any) {}
}
/***********************************************************/

export type UsersActions =
  | LoadUsersAction
  | LoadUsersSuccessAction
  | LoadUsersErrorAction
  | LoadUserAction
  | LoadUserSuccessAction
  | LoadUserErrorAction
  | LoadUserAvatarAction
  | LoadUserAvatarSuccessAction
  | LoadUserAvatarErrorAction;
