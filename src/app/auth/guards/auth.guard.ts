import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { map } from 'rxjs/internal/operators/map';
import { routerLinks } from '../../routes/router-links';
import { RouterLinksService } from '../../routes/router-links.service';
import { take, tap } from '../../../../node_modules/rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private rls: RouterLinksService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.user$.pipe(
      take(1),
      // tap(() => this.auth.initUser()),
      map(user => !!user),
      tap(logged => !logged && this.rls.navigateByUrl(routerLinks.loginPage))
    );
  }
}
