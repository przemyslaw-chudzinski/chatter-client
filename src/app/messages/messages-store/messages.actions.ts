import {Action} from '@ngrx/store';
import {IMessage} from '../models/message.model';

export enum messagesActionTypes {
  LoadMessages = '[Messages] Load Messages',
  LoadMessagesSuccess = '[Messages] Load Messages Success',
  LoadMessagesError = '[Messages] Load Messages Error',

  UpdateMessage = '[Messages] Update Message',
  UpdateMessageSuccess = '[Messages] Update Message Success',
  UpdateMessageError = '[Messages] Update Message Error',

  CleanMessagesStore = '[Messages] Clean Messages Store',

  PushMessage = '[Messages] Push Message'
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

/* Send message actions */
export class PushMessageAction implements Action {
  readonly type = messagesActionTypes.PushMessage;
  constructor(public payload: IMessage) {}
}
/***********************************************************/

/* Update Message Actions */
export class UpdateMessageAction implements Action {
  readonly type = messagesActionTypes.UpdateMessage;
  constructor(public payload: IMessage) {}
}

export class UpdateMessageSuccessAction implements Action {
  readonly type = messagesActionTypes.UpdateMessageSuccess;
  constructor(public payload: IMessage) {}
}

export class UpdateMessageErrorAction implements Action {
  readonly type = messagesActionTypes.UpdateMessageError;
  constructor(public payload: any) {}
}
/***********************************************************/

export type MessagesActions =
  |LoadMessagesAction
  | LoadMessagesSuccessAction
  | LoadMessagesErrorAction
  | CleanMessagesStoreAction
  | PushMessageAction
  | UpdateMessageAction
  | UpdateMessageSuccessAction
  | UpdateMessageErrorAction;
