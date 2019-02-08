import {IFile} from '../../files/models/file.model';

export interface IUser {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  active?: boolean;
  createdAt?: string;
  updatedAt?: string;
  available?: boolean;
  avatar?: IFile | string;
}
