import {Component, OnInit} from '@angular/core';
import {UserSettingsFormService} from './user-settings-form.service';
import {FormLayersAbstract} from '../../form-layers.abstract';
import {take, tap} from 'rxjs/operators';
import {UsersApiService} from '../../../users/users-api.service';
import {IUser} from '../../../auth/models/user.model';
import {NotificationsService} from '../../../notifications/notifications.service';

@Component({
  selector: 'chatter-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss'],
  exportAs: 'user-settings-form'
})
export class UserSettingsFormComponent extends FormLayersAbstract implements OnInit {
  private _user: IUser;
  private _isSending: boolean;

  get user(): IUser {
    return this._user;
  }

  get isSending(): boolean {
    return this._isSending;
  }

  constructor(
    private _userSettingsFormService: UserSettingsFormService,
    private _usersService: UsersApiService,
    private _notificationsService: NotificationsService
  ) {
    super();
  }

  ngOnInit() {
    this.formGroup = this._userSettingsFormService.init();

    this._usersService.loadLoggedUser().pipe(
        take(1),
        tap(user => (this._user = user)),
        tap(user => user && this.formGroup.patchValue(user))
      ).subscribe();
  }

  saveUser(): void {
    this._isSending = true;
    this._usersService.update(this.formGroup.value).pipe(
        take(1),
        tap(user => (this._user = user)),
        tap(() => (this._isSending = false)),
        tap(() => this._notificationsService.open('Settings saved', 'Got it'))
      ).subscribe();
  }

}
