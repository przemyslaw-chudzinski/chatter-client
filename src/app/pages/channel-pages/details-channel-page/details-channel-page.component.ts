import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ChatterState} from '../../../chatter-store/chatter-store.state';
import {Observable} from 'rxjs';
import {IChannel} from '../../../channels/models/channel.model';
import {selectChannel} from '../../../channels/channels-store/channels.selectors';

@Component({
  selector: 'chatter-details-channel-page',
  templateUrl: './details-channel-page.component.html',
  styleUrls: ['./details-channel-page.component.scss']
})
export class DetailsChannelPageComponent {

  channel$: Observable<IChannel> = this.store.pipe(select(selectChannel));

  constructor(
    private store: Store<ChatterState>
  ) { }

}
