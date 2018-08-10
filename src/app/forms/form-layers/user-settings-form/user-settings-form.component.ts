import {Component, OnInit} from '@angular/core';
import {UserSettingsFormService} from './user-settings-form.service';
import {FormLayersBase} from '../form-layers-base';
import {take, tap} from 'rxjs/operators';
import {UsersService} from '../../../users/users.service';
import {IUser} from '../../../auth/models/user.model';

@Component({
  selector: 'chatter-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss'],
  exportAs: 'user-settings-form'
})
export class UserSettingsFormComponent extends FormLayersBase implements OnInit {
  private _user: IUser;

  get user(): IUser {
    return this._user;
  }

  constructor(
    private userSettingsFormService: UserSettingsFormService,
    private usersService: UsersService
  ) {
    super();
  }

  ngOnInit() {
    this.formGroup = this.userSettingsFormService.init();

    this.usersService
      .loadLoggedUser()
      .pipe(
        take(1),
        tap(user => (this._user = user)),
        tap(user => user && this.formGroup.patchValue(user))
      )
      .subscribe();
  }

  saveUser(): void {
    this.usersService.update(this.formGroup.value)
      .pipe(
        take(1),
        tap(user => (this._user = user))
      )
      .subscribe();
  }

}
