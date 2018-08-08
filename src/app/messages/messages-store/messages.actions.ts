import {Action} from '@ngrx/store';
import {IMessage} from '../models/message.model';

export enum messagesActionTypes {
  LoadMessages = '[Messages] Load Messages',
  LoadMessagesSuccess = '[Messages] Load Messages Success',
  LoadMessagesError = '[Messages] Load Messages Error',

  CleanMessagesStore = '[Messages] Clean Messages Store'
}
/* Load Messages Actions */
export class LoadMessagesAction implements Action {
  readonly type = messagesActionTypes.LoadMessages;
  constructor(public payload: string) {}
}

export class LoadMessagesSuccessAction implements Action {
  readonly type = messagesActionTypes.LoadMessagesSuccess;
  constructor(public payload: IMessage[]) {}
}

export class LoadMessagesErrorAction implements Action {
  readonly type = messagesActionTypes.LoadMessagesError;
  constructor(public payload: any) {}
}
/***********************************************************/

/* Clean messages store */
export class CleanMessagesStoreAction implements Action {
  readonly type = messagesActionTypes.CleanMessagesStore;
  constructor() {}
}
/***********************************************************/

export type MessagesActions =
  |LoadMessagesAction
  | LoadMessagesSuccessAction
  | LoadMessagesErrorAction
  | CleanMessagesStoreAction;
