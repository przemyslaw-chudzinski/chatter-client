import { EWebSocketActions } from '../enums/websocket-actions.enum';
import { ENotifications } from '../enums/websocket-notifications.enum';

export interface IWebSocketData {
  action: EWebSocketActions;
  userId?: string;
  contactId?: string;
  visibleContactsIds?: string[];
  data?: any;
  type?: ENotifications;
}
