import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ChatterState} from '../../../chatter-store/chatter-store.state';
import {Observable} from 'rxjs';
import {IChannel} from '../../../channels/models/channel.model';
import {selectChannel} from '../../../channels/channels-store/channels.selectors';
import {ChannelsApiService} from '../../../channels/channels-api.service';
import {IChannelMemberFull} from '../../../channels/models/channel-member-full.model';
import {takeWhile, switchMap, tap, map, take} from 'rxjs/operators';
import {IResponseData} from '../../../chatter-http/models/response-data';
import {EditChannelNameFormComponent} from '../../../form-layers/forms/edit-channel-name-form/edit-channel-name-form.component';
import {
  channelsActionTypes, RemoveChannelSuccessAction,
  UpdateChannelAction,
  UpdateChannelErrorAction,
  UpdateChannelSuccessAction
} from '../../../channels/channels-store/channels.actions';
import {Actions, ofType} from '@ngrx/effects';
import {AlertsService} from '../../../notifications/alerts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {routerLinks} from '../../../routes/router-links';

@Component({
  selector: 'chatter-details-channel-page',
  templateUrl: './details-channel-page.component.html',
  styleUrls: ['./details-channel-page.component.scss']
})
export class DetailsChannelPageComponent implements OnInit, OnDestroy {

  channel$: Observable<IChannel> = this.store.pipe(select(selectChannel));
  members: IChannelMemberFull[] = null;
  fetchingMembers = true;
  sending: boolean;

  private alive = true;
  @ViewChild(EditChannelNameFormComponent) private channelNameForm: EditChannelNameFormComponent = null;

  constructor(
    private store: Store<ChatterState>,
    private channelsApiService: ChannelsApiService,
    private actions$: Actions,
    private alertsService: AlertsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fetchMembersList();
    this.handleTitleUpdateSuccess();
    this.handleTitleUpdateError();
    this.handleChannelRemoved();
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  updateTitle(): void {
    this.sending = true;
    this.channel$.pipe(
      take(1),
      map(channel => ({...channel, ...this.channelNameForm.value}) as IChannel),
      tap(payload => this.store.dispatch(new UpdateChannelAction(payload))),
      tap(() => this.channelNameForm && this.channelNameForm.showLoader()),
      tap(() => (this.sending = false))
    ).subscribe();
  }

  private handleTitleUpdateError(): void {
    this.actions$.pipe(
      takeWhile(() => this.alive),
      ofType(channelsActionTypes.UpdateChannelError),
      map(action => action as UpdateChannelErrorAction),
      tap(() => this.alertsService.error('Something went wrong! Try again')),
      tap(() => this.channelNameForm && this.channelNameForm.hideLoader())
    ).subscribe();
  }

  private handleTitleUpdateSuccess(): void {
    this.actions$.pipe(
      takeWhile(() => this.alive),
      ofType(channelsActionTypes.UpdateChannelSuccess),
      map(action => action as UpdateChannelSuccessAction),
      tap(() => this.channelNameForm && this.channelNameForm.close()),
      tap(action => this.alertsService.success(action.payload.message)),
      tap(() => this.channelNameForm && this.channelNameForm.hideLoader()),
      tap(action => this.channelNameForm && this.channelNameForm.updateInitValue(action.payload.data))
    ).subscribe();
  }

  private fetchMembersList(): void {
    this.channel$.pipe(
      takeWhile(() => this.alive),
      tap(() => (this.fetchingMembers = true)),
      switchMap(channel => this.channelsApiService.getChannelMembers(channel._id)),
      map(response => response as IResponseData<IChannelMemberFull[]>),
      map(response => response.data),
      tap(members => (this.members = members)),
      tap(() => (this.fetchingMembers = false))
    ).subscribe();
  }

  private handleChannelRemoved(): void {
    this.actions$.pipe(
      takeWhile(() => this.alive),
      ofType(channelsActionTypes.RemoveChannelSuccess),
      map(action => action as RemoveChannelSuccessAction),
      tap(({payload}) => payload._id === this.route.snapshot.params.id && this.router.navigate(['/', routerLinks.dashboardPage]))
    ).subscribe();
  }

}
