import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ChatterState} from '../../../chatter-store/chatter-store.state';
import {Observable} from 'rxjs';
import {IChannel} from '../../../channels/models/channel.model';
import {selectChannel} from '../../../channels/channels-store/channels.selectors';
import {ChannelsApiService} from '../../../channels/channels-api.service';
import {IChannelMemberFull} from '../../../channels/models/channel-member-full.model';
import {takeWhile, switchMap, tap, map} from 'rxjs/operators';
import {IResponseData} from '../../../chatter-http/models/response-data';

@Component({
  selector: 'chatter-details-channel-page',
  templateUrl: './details-channel-page.component.html',
  styleUrls: ['./details-channel-page.component.scss']
})
export class DetailsChannelPageComponent implements OnInit, OnDestroy {

  channel$: Observable<IChannel> = this.store.pipe(select(selectChannel));
  members: IChannelMemberFull[] = null;
  fetchingMembers = true;

  private alive = true;

  constructor(
    private store: Store<ChatterState>,
    private channelsApiService: ChannelsApiService
  ) { }

  ngOnInit(): void {
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

  ngOnDestroy(): void {
    this.alive = false;
  }

}
