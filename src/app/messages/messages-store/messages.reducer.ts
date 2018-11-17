import {MessagesState} from './messages.state';
import {MessagesActions, messagesActionTypes} from './messages.actions';

export function messagesReducer (
  state: MessagesState = new MessagesState(),
  action: MessagesActions
) {
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
        console.log('payload', action.payload);
        messages2[index].content = action.payload.content;
        messages2[index].updatedAt = action.payload.updatedAt;
      }
      return {
        ...state,
        messages: messages2
      };
    case messagesActionTypes.LoadMoreMessagesSuccess:
      return {
        ...state,
        messages: [...action.payload, ...state.messages]
      };
    default:
      return state;
  }
};
