import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { IUser } from './models/user.model';
import { authEndpoints } from '../chatter-http/http-endpoints';
import { IAuthBody } from './models/auth-body.model';
import { routerLinks } from '../routes/router-links';
import { RouterLinksService } from '../routes/router-links.service';
import { ChatterHttpClient } from '../chatter-http/chatter-http-client';
import { IAuthResponse } from './models/auth-response.model';
import { WebsocketService } from '../websocket/websocket.service';

@Injectable()
export class AuthService {
  private _user$: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);

  get user$(): Observable<IUser> {
    return this._user$.asObservable();
  }

  constructor(
    private httpClient: ChatterHttpClient,
    private route: ActivatedRoute,
    private jwtHelper: JwtHelperService,
    private routerLinksService: RouterLinksService,
    private websocketService: WebsocketService
  ) {
    this.init();
    // this.ws.init();
  }

  static token(): string {
    return localStorage.getItem(environment.tokenKey);
  }

  static removeToken(): void {
    localStorage.removeItem(environment.tokenKey);
  }

  isTokenExpired(): boolean {
    return this.jwtHelper.isTokenExpired(AuthService.token());
  }

  init(): Promise<boolean> {
    const token = AuthService.token();
    const decodedToken = this.jwtHelper.decodeToken(token);
    if (token && !this.isTokenExpired()) {
      this._user$.next(decodedToken.user);
      console.log('nawiązanie do ws');
      return this.routerLinksService.navigateByUrl(routerLinks.dashboardPage);
    }
    return this.routerLinksService.navigateByUrl(routerLinks.loginPage);
  }

  private saveToken(token: string): void {
    localStorage.setItem(environment.tokenKey, token);
  }

  singIn(body: IAuthBody): Observable<IUser> {
    return this.httpClient
      .post<IAuthResponse>(authEndpoints.signInEndpoint, body)
      .pipe(
        map(response => response as IAuthResponse),
        tap(response => this.saveToken(response.token)),
        map(response => response.user),
        tap(user => this._user$.next(user)),
        tap(() =>
          this.routerLinksService.navigateByUrl(routerLinks.dashboardPage)
        )
      );
  }

  logOut(): void {
    AuthService.removeToken();
    this._user$.next(null);
    this.routerLinksService.navigateByUrl(routerLinks.loginPage);
  }
}
