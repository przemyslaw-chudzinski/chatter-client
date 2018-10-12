import {Action} from '@ngrx/store';
import {IChannel} from '../models/channel.model';

export enum channelsActionTypes {
  LoadChannels = '[Channels] Load Channels',
  LoadChannelsSuccess = '[Channels] Load Channels Success',
  LoadChannelsError = '[Channels] Load Channels Error'
}

/* Load Channels Actions */
export class LoadChannelsAction implements Action {
  readonly type = channelsActionTypes.LoadChannels;
  constructor() {}
}

export class LoadChannelsSuccessAction implements Action {
  readonly type = channelsActionTypes.LoadChannelsSuccess;
  constructor(public payload: IChannel[]) {}
}

export class LoadChannelsErrorAction implements Action {
  readonly type = channelsActionTypes.LoadChannelsError;
  constructor(public payload: any) {}
}
/***********************************************************/

export type ChannelsActions =
  | LoadChannelsAction
  | LoadChannelsSuccessAction
  | LoadChannelsErrorAction;
