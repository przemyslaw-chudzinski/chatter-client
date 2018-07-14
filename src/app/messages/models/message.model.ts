import { IUser } from '../../auth/models/user.model';

export interface IMessage {
  _id?: string;
  message: string;
  author: IUser;
  createdAt?: string;
  read?: boolean;
  recipientId?: string;
  updatedAt?: string;
  authorId?: string;
}
