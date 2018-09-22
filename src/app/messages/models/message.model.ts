import { IUser } from '../../auth/models/user.model';

export interface IMessage {
  _id?: string;
  content: string;
  createdAt?: string;
  // read?: boolean;
  recipientId?: string;
  updatedAt?: string;
  authorId?: string;
  author?: IUser;
}
