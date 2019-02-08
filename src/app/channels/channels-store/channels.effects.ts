import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ChannelsApiService} from '../channels-api.service';
import {channelsActionTypes, LoadChannelsSuccessAction, LoadChannelSuccessAction} from './channels.actions';
import {map, switchMap} from 'rxjs/operators';

@Injectable()
export class ChannelsEffects {
  @Effect()
  loadChannels$: Observable<Action> = this._actions$.pipe(
    ofType(channelsActionTypes.LoadChannels),
    switchMap(() => this._channelsApiService.getChannels().pipe(
      map(response => response.data)
    )),
    map(channels => new LoadChannelsSuccessAction(channels))
  );

  @Effect()
  loadChannel$: Observable<Action> = this._actions$.pipe(
    ofType(channelsActionTypes.LoadChannel),
    map((action: any) => action.payload as string),
    switchMap(payload => this._channelsApiService.getChannel(payload).pipe(
      map(response => response.data)
    )),
    map(channel => new LoadChannelSuccessAction(channel))
  );

  constructor(
    private _actions$: Actions,
    private _channelsApiService: ChannelsApiService
  ) {}
}
