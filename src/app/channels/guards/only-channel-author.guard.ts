import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../../auth/auth.service';
import {IChannel} from '../models/channel.model';
import {Store} from '@ngrx/store';
import {ChatterState} from '../../chatter-store/chatter-store.state';
import {map, take} from 'rxjs/operators';
import {LoadChannelAction, LoadChannelSuccessAction} from '../channels-store/channels.actions';
import {tap} from 'rxjs/internal/operators/tap';
import {ChannelsApiService} from '../channels-api.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyChannelAuthorGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private store: Store<ChatterState>,
    private channelsApiService: ChannelsApiService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.channelsApiService.getChannel(next.params.id).pipe(
      take(1),
      map(response => response.data),
      tap(channel => this.store.dispatch(new LoadChannelSuccessAction(channel))),
      map(channel => this.isCurrentUserAuthor(channel))
    );
  }

  private isCurrentUserAuthor(channel: IChannel): boolean {
    return channel && this.auth.user$.value._id === channel.authorId;
  }
}
