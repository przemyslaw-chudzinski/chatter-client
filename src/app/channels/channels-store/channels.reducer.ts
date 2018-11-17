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

    default:
      return state;
  }
};
