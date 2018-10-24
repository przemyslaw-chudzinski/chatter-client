import {UsersState} from './users.state';
import {UsersActions, usersActionTypes} from './users.actions';

export const usersReducer = (
  state: UsersState = new UsersState(),
  action: UsersActions
): UsersState => {
  switch (action.type) {
    case usersActionTypes.LoadUsersSuccess:
      return {
        ...state,
        users: action.payload
      };
    case usersActionTypes.LoadUserSuccess:
      return {
        ...state,
        user: action.payload
      };
    case usersActionTypes.LoadUserAvatarSuccess:
      return {
        ...state,
        avatar: action.payload
      };
    default:
      return state;
  }
};
