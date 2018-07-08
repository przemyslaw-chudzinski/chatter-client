import { IUser } from './user.model';

export interface IAuthResponse {
  error: boolean;
  message: string;
  user: IUser;
  token: string;
}
