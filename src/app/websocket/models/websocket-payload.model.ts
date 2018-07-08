import { EWebSocketActions } from '../enums/websocket-actions.enum';

export interface IWebSocketPayload {
  action: EWebSocketActions;
  userId: string;
  visibleContactsIds?: string[];
}
