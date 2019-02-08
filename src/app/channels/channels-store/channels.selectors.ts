import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ChannelsState} from './channels.state';

export const selectChannelsState = createFeatureSelector<ChannelsState>('channels');

export const selectChannels = createSelector(selectChannelsState, state => state.channels);

export const selectChannelState = createFeatureSelector<ChannelsState>('channel');

export const selectChannel = createSelector(selectChannelState, state => state.channel);
