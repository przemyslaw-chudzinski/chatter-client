import {IUser} from '../../auth/models/user.model';
import {ChatterState} from '../../chatter-store/chatter-store.state';

export class UsersState extends ChatterState {
  users: IUser[] = null;
}
