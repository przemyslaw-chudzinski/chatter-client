import {IUser} from '../../auth/models/user.model';
import {Action} from '@ngrx/store';

export enum usersActionTypes {
  LoadUsers = '[Users] Load Users',
  LoadUsersSuccess = '[Users] Load Users Success',
  LoadUsersError = '[Users] Load Users Error'
}

/* Load Users Actions */
export class LoadUserAction implements Action {
  readonly type = usersActionTypes.LoadUsers;
  constructor() {}
}

export class LoadUserSuccessAction implements Action {
  readonly type = usersActionTypes.LoadUsersSuccess;
  constructor(public payload: IUser[]) {}
}

export class LoadUserErrorAction implements Action {
  readonly type = usersActionTypes.LoadUsersError;
  constructor(public payload: any) {}
}
/***********************************************************/

export type UsersActions =
  | LoadUserAction
  | LoadUserSuccessAction
  | LoadUserErrorAction;
