import { EWebSocketActions } from '../enums/websocket-actions.enum';
import { ENotifications } from '../enums/websocket-notifications.enum';

export interface IWebSocketData <T = any> {
  action: EWebSocketActions;
  userId?: string;
  contactId?: string;
  visibleContactsIds?: string[];
  data?: T;
  type?: ENotifications;
}
