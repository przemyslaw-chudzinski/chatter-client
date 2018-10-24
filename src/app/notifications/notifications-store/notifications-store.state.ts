import {ChatterState} from '../../chatter-store/chatter-store.state';
import {INotification} from '../models/notification.model';

export class NotificationsState extends ChatterState {
  notifications: INotification[] = null;
  notificationsNumber: number = null;
}
