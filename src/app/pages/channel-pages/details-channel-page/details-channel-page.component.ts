import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ChatterState} from '../../../chatter-store/chatter-store.state';
import {Observable} from 'rxjs';
import {IChannel} from '../../../channels/models/channel.model';
import {selectChannel} from '../../../channels/channels-store/channels.selectors';
import {takeWhile, tap} from 'rxjs/operators';

@Component({
  selector: 'chatter-details-channel-page',
  templateUrl: './details-channel-page.component.html',
  styleUrls: ['./details-channel-page.component.scss']
})
export class DetailsChannelPageComponent implements OnInit, OnDestroy {

  channel$: Observable<IChannel> = this.store.pipe(select(selectChannel));
  channel: IChannel = null;

  private alive = true;

  constructor(
    private store: Store<ChatterState>
  ) { }

  ngOnInit(): void {
    this.channel$.pipe(
      takeWhile(() => this.alive),
      tap(channel => (this.channel = channel))
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
