import {IUser} from '../../auth/models/user.model';


export interface IContact extends IUser {
  newMessagesCount: number;
}
