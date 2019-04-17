import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import { IUser } from './models/user.model';
import { authEndpoints } from '../chatter-http/http-endpoints';
import { IAuthBody } from './models/auth-body.model';
import { routerLinks } from '../routes/router-links';
import { ChatterHttpClient } from '../chatter-http/chatter-http-client';
import { IAuthResponse } from './models/auth-response.model';
import { WebsocketService } from '../websocket/websocket.service';
import { take, map, tap } from 'rxjs/operators';
import {decodedToken, removeToken, saveToken, tokenExpired} from '../helpers/helpers';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  user$ = new BehaviorSubject<IUser>(null);

  constructor(
    private _httpClient: ChatterHttpClient,
    private _router: Router,
    private _websocketService: WebsocketService
  ) {
    this.init();
  }

  init(): void {
    this.initUser();
  }

  initUser(): IUser {
    const _decodedToken = decodedToken();
    this.user$.next(!tokenExpired() ? _decodedToken.user : null);
    return (_decodedToken && _decodedToken.user) || null;
  }

  signIn(body: IAuthBody): Observable<IUser> {
    return this._httpClient
      .post<IAuthResponse>(authEndpoints.signInEndpoint, body)
      .pipe(
        map(response => response as IAuthResponse),
        tap(response => saveToken(response.token)),
        map(response => response.user),
        tap(user => this.user$.next(user)),
        tap(user => user && this._websocketService.connect(user._id)),
        tap(() => this._router.navigateByUrl(routerLinks.dashboardPage))
      );
  }

  logOut(): void {
    removeToken();
    this._router.navigateByUrl(routerLinks.loginPage);
    this.user$
      .pipe(
        take(1),
        tap(user => this._websocketService.disconnect(user._id)),
        tap(() => this.user$.next(null))
      )
      .subscribe();
  }

  //TODO: Coś z tym zrobic
  resetPassword(): Observable<any> {
    return this._httpClient.post('', null);
  }
}
