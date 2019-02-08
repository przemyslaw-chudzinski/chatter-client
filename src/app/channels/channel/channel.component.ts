import {Component, Input} from '@angular/core';
import {IChannel} from '../models/channel.model';
import {ChannelsApiService} from '../channels-api.service';

@Component({
  selector: 'chatter-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent {
  @Input() channel: IChannel = null;

  constructor(
    private _channelsApiService: ChannelsApiService
  ) {}

  showEditForm(channel: IChannel, event: MouseEvent): void {
    event.stopPropagation();
  }

  removeGroup(channel: IChannel, event: MouseEvent): void {
    event.stopPropagation();
    const confirmed = confirm('Do you want to remove this group?');
  }

}
