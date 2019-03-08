import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  LoadUserAvatarErrorAction,
  LoadUserAvatarSuccessAction,
  LoadUsersSuccessAction,
  LoadUserSuccessAction,
  usersActionTypes
} from './users.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {UsersApiService} from '../users-api.service';

@Injectable()
export class UsersEffects {
  @Effect()
  $loadUsers: Observable<Action> = this.actions$.pipe(
    ofType(usersActionTypes.LoadUsers),
    switchMap(() => this.usersService.loadUsers().pipe(
      map(response => response.data)
    )),
    map(users => new LoadUsersSuccessAction(users))
  );

  @Effect()
  loadUser$: Observable<Action> = this.actions$.pipe(
    ofType(usersActionTypes.LoadUser),
    map((action: any) => action.payload as string),
    switchMap(userId => this.usersService.loadUser(userId)),
    map(response => new LoadUserSuccessAction(response.data))
  );

  @Effect()
  loadAvatar$: Observable<Action> = this.actions$.pipe(
    ofType(usersActionTypes.LoadUserAvatar),
    switchMap(() => this.usersService.loadAvatar()),
    map(({data}) => new LoadUserAvatarSuccessAction(data)),
    catchError(err => of(new LoadUserAvatarErrorAction(err)))
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersApiService
  ) {}
}
