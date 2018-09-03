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
    case messagesActionTypes.PushMessage:
      console.log('PushMessage');
      let messages = [...state.messages];
      messages.push(action.payload);
      return {
        ...state,
        messages
      };
    case messagesActionTypes.UpdateMessage:
      let messages2 = [...state.messages];
      const index = messages2.findIndex(i => i._id === action.payload._id);
      if (index !== -1) {
        messages2[index].content = action.payload.content;
      }
      return {
        ...state,
        messages: messages2
      };
    default:
      return state;
  }
};
