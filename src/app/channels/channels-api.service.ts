import { Injectable } from '@angular/core';
import {ChatterHttpClient} from '../chatter-http/chatter-http-client';
import {Observable} from 'rxjs';
import {channelsEndpoints} from '../chatter-http/http-endpoints';
import {IChannel} from './models/channel.model';
import {IResponseData} from '../chatter-http/models/response-data';
import {IChannelPayload} from './models/channel-payload.model';

@Injectable({
  providedIn: 'root'
})
export class ChannelsApiService {
  constructor(
    private _httpClient: ChatterHttpClient
  ) { }

  saveChannel(payload: IChannelPayload): Observable<IResponseData<IChannel>> {
    return this._httpClient.post<IResponseData<IChannel>>(channelsEndpoints.channelEndpoint, payload);
  }

  getChannels(): Observable<IResponseData<IChannel[]>> {
    return this._httpClient.get<IResponseData<IChannel[]>>(channelsEndpoints.channelEndpoint);
  }
}
