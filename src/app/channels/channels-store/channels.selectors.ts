import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ChannelsState} from './channels.state';

export const selectChannelsState = createFeatureSelector<ChannelsState>('channels');

export const selectChannels = createSelector(selectChannelsState, state => state.channels);

export const selectChannel = createSelector(selectChannelsState, state => state.channel);
