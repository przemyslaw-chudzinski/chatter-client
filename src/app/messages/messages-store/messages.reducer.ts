import {MessagesState} from './messages.state';
import {MessagesActions, messagesActionTypes} from './messages.actions';

export const messagesReducer = (
  state: MessagesState = new MessagesState(),
  action: MessagesActions
) => {
  switch (action.type) {
    case messagesActionTypes.LoadMessagesSuccess:
      return {
        ...state,
        messages: action.payload
      };
    case messagesActionTypes.CleanMessagesStore:
      return {
        ...state,
        messages: null
      };
    default:
      return state;
  }
};
