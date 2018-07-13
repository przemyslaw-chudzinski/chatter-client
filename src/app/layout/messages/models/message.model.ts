import { IUser } from '../../../auth/models/user.model';

export interface IMessage {
  message: string;
  author: IUser;
}
