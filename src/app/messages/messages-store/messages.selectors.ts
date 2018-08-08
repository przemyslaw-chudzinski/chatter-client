import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MessagesState} from './messages.state';

export const selectMessagesState = createFeatureSelector<MessagesState>('messages');

export const selectMessages = createSelector(selectMessagesState, state => state.messages);
