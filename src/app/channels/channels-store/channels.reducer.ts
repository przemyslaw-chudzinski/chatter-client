import {ChannelsState} from './channels.state';
import {ChannelsActions, channelsActionTypes} from './channels.actions';

export function channelsReducer (
  state: ChannelsState = new ChannelsState(),
  action: ChannelsActions
): ChannelsState {
  switch (action.type) {
    case channelsActionTypes.LoadChannelsSuccess:
      return {
        ...state,
        channels: action.payload
      };
    case channelsActionTypes.LoadChannelSuccess:
      return {
        ...state,
        channel: action.payload
      };

    default:
      return state;
  }
};
