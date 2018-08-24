import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import { IUser } from './models/user.model';
import { authEndpoints } from '../chatter-http/http-endpoints';
import { IAuthBody } from './models/auth-body.model';
import { routerLinks } from '../routes/router-links';
import { RouterLinksService } from '../routes/router-links.service';
import { ChatterHttpClient } from '../chatter-http/chatter-http-client';
import { IAuthResponse } from './models/auth-response.model';
import { WebsocketService } from '../websocket/websocket.service';
import { take, map, tap } from 'rxjs/operators';
import {decodedToken, removeToken, saveToken, token, tokenExpired} from '../helpers/helpers';

@Injectable()
export class AuthService {
  user$ = new BehaviorSubject<IUser>(null);

  constructor(
    private _httpClient: ChatterHttpClient,
    private _routerLinksService: RouterLinksService,
    private _websocketService: WebsocketService
  ) {
    this.init();
  }

  init(): void {
    this.initUser();
    this.user$.pipe(
      tap(user => user && (this._websocketService.userId = user._id)),
      tap(user => user && this._websocketService.connect(user._id))
    ).subscribe();
  }

  initUser(): IUser {
    const _decodedToken = decodedToken();
    token && !tokenExpired() && this.user$.next(_decodedToken.user) || null;
    return (_decodedToken && _decodedToken.user) || null;
  }

  singIn(body: IAuthBody): Observable<IUser> {
    return this._httpClient
      .post<IAuthResponse>(authEndpoints.signInEndpoint, body)
      .pipe(
        map(response => response as IAuthResponse),
        tap(response => saveToken(response.token)),
        map(response => response.user),
        tap(user => this.user$.next(user)),
        tap(() =>
          this._routerLinksService.navigateByUrl(routerLinks.dashboardPage)
        ),
        tap(user => (this._websocketService.userId = user._id)),
        tap(user => this._websocketService.connect(user._id))
      );
  }

  logOut(): void {
    removeToken();
    this._routerLinksService.navigateByUrl(routerLinks.loginPage);
    this.user$
      .pipe(
        take(1),
        tap(user => user && this._websocketService.disconnect(user._id)),
        tap(() => this.user$.next(null))
      )
      .subscribe();
  }

  resetPassword(): Observable<any> {
    return this._httpClient.post('', null);
  }
}
