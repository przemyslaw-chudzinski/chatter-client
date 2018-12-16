import {Component, Input, OnInit} from '@angular/core';
import {IChannel} from '../models/channel.model';

@Component({
  selector: 'chatter-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  @Input() channel: IChannel = null;

  ngOnInit() {
  }

}
