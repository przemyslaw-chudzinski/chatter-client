import { Injectable } from '@angular/core';
import {ChatterHttpClient} from '../chatter-http/chatter-http-client';
import {Observable} from 'rxjs';
import {channelsEndpoints} from '../chatter-http/http-endpoints';
import {IChannel} from './models/channel.model';
import {IResponseData} from '../chatter-http/models/response-data';
import {IChannelPayload} from './models/channel-payload.model';
import {IChannelMemberFull} from './models/channel-member-full.model';

@Injectable({
  providedIn: 'root'
})
export class ChannelsApiService {
  constructor(private httpClient: ChatterHttpClient) { }

  saveChannel(payload: IChannelPayload): Observable<IResponseData<IChannel>> {
    return this.httpClient.post<IResponseData<IChannel>, IChannelPayload>(channelsEndpoints.channelEndpoint, payload);
  }

  getChannels(): Observable<IResponseData<IChannel[]>> {
    return this.httpClient.get<IResponseData<IChannel[]>>(channelsEndpoints.channelEndpoint);
  }

  acceptInvitation(channelId: string): Observable<any> {
    return this.httpClient.post<any, {[key: string]: string}>(channelsEndpoints.acceptInvitationEndpoint, {channelId});
  }

  getChannel(channelId: string): Observable<IResponseData<IChannel>> {
    return this.httpClient.get<IResponseData<IChannel>>(channelsEndpoints.singleChannelEndpoint(channelId));
  }

  deleteChannel(channelId: string): Observable<IResponseData<IChannel>> {
    return this.httpClient.delete<IResponseData<IChannel>>(channelsEndpoints.deleteChannelEndpoint(channelId));
  }

  updateChannel(channelId: string, payload: IChannelPayload): Observable<IResponseData<IChannel>> {
    return this.httpClient.put<IResponseData<IChannel>, IChannelPayload>(channelsEndpoints.updateChannelEndpoint(channelId), payload);
  }

  getChannelMembers(channelId: string): Observable<IResponseData<IChannelMemberFull[]>> {
    return this.httpClient.get<IResponseData<IChannelMemberFull[]>>(channelsEndpoints.getChannelMemebersEndpoint(channelId));
  }
}
