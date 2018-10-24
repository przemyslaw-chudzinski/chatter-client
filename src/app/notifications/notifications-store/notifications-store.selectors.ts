import {createFeatureSelector, createSelector} from '@ngrx/store';
import {NotificationsState} from './notifications-store.state';

export const selectNotificationsState = createFeatureSelector<NotificationsState>('notifications');

export const selectNotifications = createSelector(selectNotificationsState, state => state.notifications);

export const selectNotificationsNumber = createSelector(selectNotificationsState, state => state.notificationsNumber);
