import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {takeWhile, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {ChatterState} from '../../../chatter-store/chatter-store.state';
import {LoadChannelAction} from '../../../channels/channels-store/channels.actions';

@Component({
  selector: 'chatter-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit, OnDestroy {
  private _alive = true;

  constructor(
    private _route: ActivatedRoute,
    private _store: Store<ChatterState>,
  ) { }

  ngOnInit() {
    this._route.params.pipe(
      takeWhile(() => this._alive),
      tap(params => params && this._store.dispatch(new LoadChannelAction(params.id)))
    ).subscribe();
  }

  ngOnDestroy(): void {
    this._alive = false;
  }

}
