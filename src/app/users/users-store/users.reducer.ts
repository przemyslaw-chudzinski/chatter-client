import {UsersState} from './users.state';
import {UsersActions, usersActionTypes} from './users.actions';
import {IFile} from '../../files/models/file.model';

const defaultAvatar: IFile = {
  original: {
    url: 'http://placehold.it/100x100',
    name: null,
    size: null
  },
  fileId: null,
  thumbnail: null,
  extension: null,
  mimeType: null
};

export function usersReducer (
  state: UsersState = new UsersState(),
  action: UsersActions
): UsersState {
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
    case usersActionTypes.LoadUserAvatarError:
      return {
        ...state,
        avatar: defaultAvatar
      };
    default:
      return state;
  }
};
