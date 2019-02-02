import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { take, map, tap } from 'rxjs/operators';
import { routerLinks } from '../../routes/router-links';

@Injectable()
export class UserNotLoggedGuard implements CanActivate {
  constructor(
    private _auth: AuthService,
    private _router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this._auth.user$.pipe(
      take(1),
      map(user => !user),
      tap(logged => !logged && this._router.navigateByUrl(routerLinks.dashboardPage))
    );
  }
}
