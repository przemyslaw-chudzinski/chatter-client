import { Injectable } from '@angular/core';
import { routerLinks } from './router-links';
import { Router, UrlTree, NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterLinksService {
  constructor(private router: Router) {}

  get links(): { [k: string]: string | object } {
    return routerLinks;
  }

  /**
   * @param routerLink
   */
  private withSlash(routerLink: string): string {
    return '/' + routerLink;
  }

  /**
   * @param url
   * @param extras
   * @param withSlash
   */
  navigateByUrl(
    url: string | UrlTree,
    extras: NavigationExtras = { skipLocationChange: false },
    withSlash: boolean = true
  ): Promise<boolean> {
    url = withSlash && typeof url === 'string' ? this.withSlash(url) : url;
    return this.router.navigateByUrl(url, extras);
  }

  /**
   * @param commands
   * @param extras
   */
  navigate(
    commands: any[],
    extras: NavigationExtras = { skipLocationChange: false }
  ): Promise<boolean> {
    return this.router.navigate(commands, extras);
  }
}
