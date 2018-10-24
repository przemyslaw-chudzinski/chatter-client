import {NotificationsState} from './notifications-store.state';
import {NotificationsActions, notificationsActionTypes} from './notifications-store.actions';

export const notificationsReducer = (
  state: NotificationsState = new NotificationsState(),
  action: NotificationsActions
): NotificationsState => {
  switch (action.type) {
    case notificationsActionTypes.LoadNotificationsSuccess:
      return {
        ...state,
        notifications: action.payload
      };
    case notificationsActionTypes.LoadNotificationsNumberSuccess:
      return {
        ...state,
        notificationsNumber: action.payload
      };
    case notificationsActionTypes.ResetNotificationsNumber:
      return {
        ...state,
        notificationsNumber: null
      };
    default:
      return state;
  }
};
