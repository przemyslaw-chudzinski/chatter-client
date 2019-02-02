import {IUser} from '../../auth/models/user.model';
import {INotificationExtra} from './notification-extra.model';

export interface INotification<T = INotificationExtra> {
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
