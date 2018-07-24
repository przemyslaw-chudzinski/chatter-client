import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { RouterLinksService } from '../../routes/router-links.service';
import { take, map, tap } from '../../../../node_modules/rxjs/operators';
import { routerLinks } from '../../routes/router-links';

@Injectable({
  providedIn: 'root'
})
export class UserNotLoggedGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private routerLinksService: RouterLinksService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.user$.pipe(
      take(1),
      map(user => !user),
      tap(
        logged =>
          !logged &&
          this.routerLinksService.navigateByUrl(routerLinks.dashboardPage)
      )
    );
  }
}
