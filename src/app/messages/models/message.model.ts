import { IUser } from '../../auth/models/user.model';
import {IFile} from '../../files/models/file.model';

export interface IMessage {
  _id?: string;
  content: string;
  createdAt?: string;
  // read?: boolean;
  recipientId?: string;
  updatedAt?: string;
  authorId?: string;
  author?: IUser;
  attachedFiles?: IFile[];
}
