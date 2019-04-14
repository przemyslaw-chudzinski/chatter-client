import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../../auth/auth.service';
import {IChannel} from '../models/channel.model';
import {select, Store} from '@ngrx/store';
import {ChatterState} from '../../chatter-store/chatter-store.state';
import {selectChannel} from '../channels-store/channels.selectors';
import {map} from 'rxjs/operators';
import {LoadChannelAction} from '../channels-store/channels.actions';

@Injectable({
  providedIn: 'root'
})
export class OnlyChannelAuthorGuard implements CanActivate {

  channel$: Observable<IChannel> = this.store.pipe(select(selectChannel));

  constructor(
    private auth: AuthService,
    private store: Store<ChatterState>
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    next.params.id && this.store.dispatch(new LoadChannelAction(next.params.id));
    return this.channel$.pipe(
      map(channel => this.isCurrentUserAuthor(channel))
    );
  }

  private isCurrentUserAuthor(channel: IChannel): boolean {
    return channel && this.auth.user$.value._id === channel.authorId;
  }
}
