import {IMember} from './member.model';

export interface IChannel {
  _id: string;
  name: string;
  members: IMember[];
  authorId: string;
  createdAt: string;
}
