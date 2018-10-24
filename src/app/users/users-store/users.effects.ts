import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LoadUserAvatarSuccessAction, LoadUsersSuccessAction, LoadUserSuccessAction, usersActionTypes} from './users.actions';
import {map, switchMap} from 'rxjs/operators';
import {UsersApiService} from '../users-api.service';

@Injectable()
export class UsersEffects {
  @Effect()
  $loadUsers: Observable<Action> = this.actions$.pipe(
    ofType(usersActionTypes.LoadUsers),
    switchMap(() => this.usersService.loadUsers().pipe(
      map(response => response.results)
    )),
    map(users => new LoadUsersSuccessAction(users))
  );

  @Effect()
  loadUser$: Observable<Action> = this.actions$.pipe(
    ofType(usersActionTypes.LoadUser),
    map((action: any) => action.payload as string),
    switchMap(userId => this.usersService.loadUser(userId)),
    map(user => new LoadUserSuccessAction(user))
  );

  @Effect()
  loadAvatar$: Observable<Action> = this.actions$.pipe(
    ofType(usersActionTypes.LoadUserAvatar),
    switchMap(() => this.usersService.loadAvatar()),
    map(avatar => new LoadUserAvatarSuccessAction(avatar))
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersApiService
  ) {}
}
