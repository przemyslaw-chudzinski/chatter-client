import {createFeatureSelector} from '@ngrx/store';
import {MessagesState} from './messages.state';

export const selectMessages = createFeatureSelector<MessagesState>('messages');
