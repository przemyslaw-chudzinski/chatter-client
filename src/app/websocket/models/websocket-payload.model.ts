import { EWebSocketActions } from '../enums/websocket-actions.enum';

export interface IWebSocketData {
  action: EWebSocketActions;
  userId?: string;
  contactId?: string;
  visibleContactsIds?: string[];
  data?: any;
}
