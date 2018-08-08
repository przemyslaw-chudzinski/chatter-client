import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UsersState} from './users.state';

export const selectUsersState = createFeatureSelector<UsersState>('users');

export const selectUsers = createSelector(selectUsersState, state => state.users);

export const selectUser = createSelector(selectUsersState, state => state.user);
