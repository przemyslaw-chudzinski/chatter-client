import {IUser} from '../../auth/models/user.model';

export interface IChannelMemberFull extends IUser{
  confirmed: boolean;
  confirmedAt: Date | null;
}
