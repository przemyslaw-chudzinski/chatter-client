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

    case channelsActionTypes.ClearChannelsStore:
      return new ChannelsState();

    case channelsActionTypes.RemoveChannelSuccess:
      return {
        ...state
      };

    case channelsActionTypes.UpdateChannelSuccess:
      const _state = {...state};
      const {data} = action.payload;
      const index = _state.channels.findIndex(c => c._id === data._id);
      if (index !== -1) _state.channels[index] = data;
      return _state;

    default:
      return state;
  }
}
