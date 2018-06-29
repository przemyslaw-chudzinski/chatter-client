import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { IUser } from './models/user.model';

@Injectable()
export class AuthService {
  private _user$: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);

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

  private saveToken(token: string): void {
    localStorage.setItem(environment.tokenKey, token);
  }

  get user$(): Observable<IUser> {
    return this._user$;
  }
}
