import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ChannelsApiService} from '../channels-api.service';
import {channelsActionTypes, LoadChannelsSuccessAction} from './channels.actions';
import {map, switchMap} from 'rxjs/operators';

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

  constructor(
    private actions$: Actions,
    private channelsApiService: ChannelsApiService
  ) {}
}
