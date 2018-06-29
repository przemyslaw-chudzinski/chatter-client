import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IUser, ILoginResponse, IAuthUser } from './models/auth';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  private _user$: BehaviorSubject<IAuthUser> = new BehaviorSubject<IAuthUser>(
    null
  );

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {}

  static token(): string {
    return localStorage.getItem(environment.tokenKey);
  }

  static isTokenExpired(): boolean {
    return false;
  }

  static redirectToSingIn(): void {
    const url = encodeURI(
      `http://localhost:8000/oauth/authorize?client_id=1&redirect_uri=http://localhost:4200/callback&response_type=code&scope=`
    );
    window.location.href = url;
  }

  static redirectToLogout(): void {
    const url = 'http://localhost:8000/account/logout';
    window.location.href = url;
  }

  private saveToken(token: string): void {
    localStorage.setItem(environment.tokenKey, token);
  }

  get user$(): Observable<IAuthUser> {
    return this._user$;
  }

  requestForToken(): void {
    const body = {
      ...environment.oauth,
      code: this.route.snapshot.queryParams.code
    };

    this.httpClient
      .post('http://localhost:8000/oauth/token', body)
      .pipe(
        tap(response => console.log(response)),
        map(response => response as ILoginResponse),
        tap(response => this.saveToken(response.access_token)),
        tap(() => {
          this.httpClient
            .get('http://localhost:8000/api/v1/user', {
              headers: { Authorization: 'Bearer ' + AuthService.token() }
            })
            .pipe(
              map(user => user as IUser),
              tap(user => {
                this._user$.next({
                  ...user,
                  access_token: AuthService.token()
                });
              }),
              tap(() => this.router.navigateByUrl('/dashboard'))
            )
            .subscribe();
        })
      )
      .subscribe();
  }

  // static token(): string {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     return token;
  //   }
  //   return null;
  // }

  // init(): void {
  //   const token = AuthService.token();
  //   if (token && !this.isTokenExpired()) {
  //     this.loadCurrentLoggeduser();
  //     console.log('user is logged');
  //   } else {
  //     this.redirectToSigIn();
  //     console.log('user is NOT logged');
  //   }
  // }

  // private loadCurrentLoggeduser(): void {
  //   this.httpClient
  //     .get('http://localhost:8000/api/v1/user', {
  //       headers: { Authorization: 'Bearer ' + AuthService.token() }
  //     })
  //     .pipe(
  //       map(user => user as IAuthUser),
  //       tap(user => (user.access_token = AuthService.token())),
  //       tap(user => this._user$.next(user)),
  //       tap(() => this.router.navigateByUrl(this.returnUrl || '/dashboard'))
  //       // tap(() => this.removeReturnUrl())
  //     )
  //     .subscribe();
  // }

  // get user$(): Observable<IUser> {
  //   return this._user$;
  // }

  // getToken(): void {
  // const body = {
  //   grant_type: 'authorization_code',
  //   client_id: '1',
  //   client_secret: 'PUi4n07WyJ35px3M7lPOzab1xC1yvMQjgdbIUa1D	',
  //   redirect_uri: 'http://localhost:4200/callback',
  //   code: this.route.snapshot.queryParams.code
  // };

  //   this.httpClient
  //     .post('http://localhost:8000/oauth/token', body)
  //     .pipe(
  //       map(response => response as ILoginResponse),
  //       tap(response => (this.token = response.access_token))
  //       // tap(response =>
  //       //   this.router.navigateByUrl(this.returnUrl || '/dashboard')
  //       // ),
  //       // tap(response => this.removeReturnUrl()),
  //       // tap(response => {
  //       //   this.loadCurrentLoggeduser();
  //       // })
  //     )
  //     .subscribe();
  // }

  // removeToken(): void {
  //   localStorage.removeItem('token');
  // }

  // logout(): void {
  //   this.httpClient
  //     .post(
  //       'http://localhost:8000/api/v1/auth/logout',
  //       {},
  //       {
  //         headers: { Authorization: 'Bearer ' + AuthService.token() }
  //       }
  //     )
  //     .pipe(
  //       tap(response => this.removeToken()),
  //       tap(response => this._user$.next(null)),
  //       tap(response => this.redirectToLogout())
  //     )
  //     .subscribe();
  // }

  // set token(token: string) {
  //   localStorage.setItem('token', token);
  // }

  // getSignInUrl(returnUrl?: string): string {
  //   return encodeURI(
  //     'http://localhost:8000/oauth/authorize?client_id=1&redirect_uri=http://localhost:4200/callback&response_type=code&scope='
  //   );
  // }

  // getSignUpUrl(): string {
  //   return 'http://localhost:8000/register';
  // }

  // get returnUrl(): string {
  //   return localStorage.getItem('returnUrl');
  // }

  // removeReturnUrl(): void {
  //   localStorage.removeItem('returnUrl');
  // }

  // setReturnUrl(returnUrl?: string) {
  //   localStorage.setItem('returnUrl', returnUrl);
  // }

  // redirectToSigIn(returnUrl?: string): void {
  //   this.setReturnUrl(returnUrl);
  //   window.location.href = this.getSignInUrl(returnUrl);
  // }

  // redirectToLogout(): void {
  //   window.location.href = 'http://localhost:8000/account/logout';
  // }

  // isTokenExpired(): boolean {
  //   const token = AuthService.token();
  //   if (token) {
  //     return this.jwtHelper.isTokenExpired(token);
  //   }
  //   return false;
  // }
}
