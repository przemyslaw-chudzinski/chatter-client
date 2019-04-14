import {Action} from '@ngrx/store';
import {IChannel} from '../models/channel.model';

export enum channelsActionTypes {
  LoadChannels = '[Channels] Load Channels',
  LoadChannelsSuccess = '[Channels] Load Channels Success',
  LoadChannelsError = '[Channels] Load Channels Error',

  LoadChannel = '[Channels] Load Single Channel',
  LoadChannelSuccess = '[Channels] Load Single Channel Success',
  LoadChannelError = '[Channels] Load Single Channel Error',

  RemoveChannel = '[Channels] Remove Channel',
  RemoveChannelSuccess = '[Channels] Remove Channel Success',
  RemoveChannelError = '[Channels] Remove Channel Error',

  ClearChannelsStore = '[Channels] Clear Channels Store',

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

/* Load single channel Actions */
export class LoadChannelAction implements Action {
  readonly type = channelsActionTypes.LoadChannel;
  constructor(public payload: string) {}
}

export class LoadChannelSuccessAction implements Action {
  readonly type = channelsActionTypes.LoadChannelSuccess;
  constructor(public payload: IChannel) {}
}

export class LoadChannelErrorAction implements Action {
  readonly type = channelsActionTypes.LoadChannelError;
  constructor(public payload: any) {}
}
/***********************************************************/

/* Clear channels store action */
export class ClearChannelsStore implements Action {
  readonly type = channelsActionTypes.ClearChannelsStore;
}
/***********************************************************/

/* Remove channel actions */
export class RemoveChannelAction implements Action {
  readonly type = channelsActionTypes.RemoveChannel;
  constructor(public payload: IChannel) {}
}

export class RemoveChannelSuccessAction implements Action {
  readonly type = channelsActionTypes.RemoveChannelSuccess;
  constructor(public payload: IChannel) {}
}

export class RemoveChannelErrorAction implements Action {
  readonly type = channelsActionTypes.RemoveChannelError;
  constructor(public payload: any) {}
}
/***********************************************************/

export type ChannelsActions =
  | LoadChannelsAction
  | LoadChannelsSuccessAction
  | LoadChannelsErrorAction
  | LoadChannelAction
  | LoadChannelSuccessAction
  | LoadChannelErrorAction
  | ClearChannelsStore
  | RemoveChannelAction
  | RemoveChannelSuccessAction
  | RemoveChannelErrorAction;
