import {IUser} from '../../auth/models/user.model';

export interface INotification<T = object> {
  _id: string;
  authorId: string;
  author: IUser;
  message: string;
  recipientIds: string[];
  createdAt: Date;
  read: boolean;
  readAt: Date;
  type?: string;
  extra?: T;
}
