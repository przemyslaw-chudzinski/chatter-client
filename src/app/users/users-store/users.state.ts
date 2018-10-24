import {IUser} from '../../auth/models/user.model';
import {ChatterState} from '../../chatter-store/chatter-store.state';
import {IFile} from '../../files/models/file.model';

export class UsersState extends ChatterState {
  users: IUser[] = null;
  user: IUser = null;
  avatar: IFile | string = 'http://placehold.it/100x100';
}
