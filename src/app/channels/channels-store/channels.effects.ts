import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Action, Store} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ChannelsApiService} from '../channels-api.service';
import {
  channelsActionTypes, LoadChannelsAction,
  LoadChannelsSuccessAction,
  LoadChannelSuccessAction,
  RemoveChannelAction, RemoveChannelErrorAction,
  RemoveChannelSuccessAction
} from './channels.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {ChatterState} from '../../chatter-store/chatter-store.state';

@Injectable()
export class ChannelsEffects {
  @Effect()
  loadChannels$: Observable<Action> = this.actions$.pipe(
    ofType(channelsActionTypes.LoadChannels),
    switchMap(() => this.channelsApiService.getChannels().pipe(
      map(response => response.data)
    )),
    map(channels => new LoadChannelsSuccessAction(channels))
  );

  @Effect()
  loadChannel$: Observable<Action> = this.actions$.pipe(
    ofType(channelsActionTypes.LoadChannel),
    map((action: any) => action.payload as string),
    switchMap(payload => this.channelsApiService.getChannel(payload).pipe(
      map(response => response.data)
    )),
    map(channel => new LoadChannelSuccessAction(channel))
  );

  @Effect()
  removeChannel$: Observable<Action> = this.actions$.pipe(
    ofType(channelsActionTypes.RemoveChannel),
    map((action: RemoveChannelAction) => action.payload),
    switchMap(payload => this.channelsApiService.deleteChannel(payload._id).pipe(
      map(response => response.data),
      map(channel => new RemoveChannelSuccessAction(channel)),
      tap(() => this.store.dispatch(new LoadChannelsAction())),
      catchError(err => of(new RemoveChannelErrorAction(err)))
    ))
  );

  constructor(
    private actions$: Actions,
    private channelsApiService: ChannelsApiService,
    private store: Store<ChatterState>
  ) {}
}
