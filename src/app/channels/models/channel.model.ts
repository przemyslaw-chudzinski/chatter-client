import {IChannelMember} from './channel-member.model';

export interface IChannel {
  _id: string;
  name: string;
  members: IChannelMember[];
  authorId: string;
  createdAt: string;
}
