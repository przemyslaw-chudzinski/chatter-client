import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LoadUserSuccessAction, usersActionTypes} from './users.actions';
import {map, switchMap} from 'rxjs/operators';
import {UsersService} from '../users.service';

@Injectable()
export class UsersEffects {
  @Effect()
  $load: Observable<Action> = this.actions$.pipe(
    ofType(usersActionTypes.LoadUsers),
    switchMap(() => this.usersService.loadUsers().pipe(
      map(response => response.results)
    )),
    map(users => new LoadUserSuccessAction(users))
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {}
}
