import {createFeatureSelector} from '@ngrx/store';
import {UsersState} from './users.state';

/* It selectes users as IUsers[] from store of users  */
export const selectUsers = createFeatureSelector<UsersState>('users');
