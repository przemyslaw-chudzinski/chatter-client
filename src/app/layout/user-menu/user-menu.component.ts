import {Component, OnDestroy, OnInit} from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import {routerLinks} from '../../routes/router-links';
import {select, Store} from '@ngrx/store';
import {ChatterState} from '../../chatter-store/chatter-store.state';
import {LoadUserAvatarAction} from '../../users/users-store/users.actions';
import {IFile} from '../../files/models/file.model';
import {selectAvatar} from '../../users/users-store/users.selectors';
import {IUser} from '../../auth/models/user.model';
import {switchMap, takeWhile, tap} from 'rxjs/operators';

@Component({
  selector: 'chatter-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit, OnDestroy {
  links = routerLinks;
  private _avatar: IFile;
  private _user: IUser;
  private _alive = true;

  get user(): IUser {
    return this._user;
  }

  constructor(
    public auth: AuthService,
    private _store: Store<ChatterState>
  ) {}

  ngOnInit() {
    this._store.dispatch(new LoadUserAvatarAction());
    this._store
      .pipe(
        takeWhile(() => this._alive),
        select(selectAvatar),
        tap(avatar => (this._avatar = avatar)),
        switchMap(() => this.auth.user$),
        tap(user => user && (user.avatar = this._avatar)),
        tap(user => (this._user = user))
      )
      .subscribe();

  }

  ngOnDestroy() {
    this._alive = false;
  }

}
