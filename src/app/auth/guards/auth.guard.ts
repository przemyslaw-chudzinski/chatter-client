import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { routerLinks } from '../../routes/router-links';
import { RouterLinksService } from '../../routes/router-links.service';
import { take, tap, map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthService, private _routerLinksService: RouterLinksService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this._auth.user$.pipe(
      take(1),
      map(user => !!user),
      tap(logged => !logged && this._routerLinksService.navigateByUrl(routerLinks.loginPage))
    );
  }
}
