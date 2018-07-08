import { Injectable } from '@angular/core';
import { routerLinks } from './router-links';
import { Router, UrlTree, NavigationExtras } from '@angular/router';

@Injectable()
export class RouterLinksService {
  constructor(private router: Router) {}

  get routerLinks(): { [k: string]: string | object } {
    return routerLinks;
  }

  withSlash(routerLink: string): string {
    return '/' + routerLink;
  }

  navigateByUrl(
    url: string | UrlTree,
    extras: NavigationExtras = { skipLocationChange: false },
    withSlash: boolean = true
  ): Promise<boolean> {
    url = withSlash && typeof url === 'string' ? this.withSlash(url) : url;
    return this.router.navigateByUrl(url, extras);
  }

  navigate(
    commands: any[],
    extras: NavigationExtras = { skipLocationChange: false }
  ): Promise<boolean> {
    return this.router.navigate(commands, extras);
  }
}
