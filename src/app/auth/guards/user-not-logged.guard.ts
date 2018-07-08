import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { RouterLinksService } from '../../routes/router-links.service';

@Injectable({
  providedIn: 'root'
})
export class UserNotLoggedGuard implements CanActivate {
  constructor(private auth: AuthService, private rls: RouterLinksService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
