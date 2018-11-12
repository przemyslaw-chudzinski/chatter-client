import {Component} from '@angular/core';
import {IFile} from '../../../files/models/file.model';
import {UsersApiService} from '../../../users/users-api.service';
import {switchMap, take, tap} from 'rxjs/operators';
import {AuthService} from '../../../auth/auth.service';
import {NotificationsService} from '../../../notifications/notifications.service';

@Component({
  selector: 'chatter-user-settings-page',
  templateUrl: './user-settings-page.component.html',
  styleUrls: ['./user-settings-page.component.scss']
})
export class UserSettingsPageComponent {

  loadingUserForm: boolean;

  constructor(
    private _usersApiService: UsersApiService,
    private _auth: AuthService,
    private _notificationsService: NotificationsService
  ) {}

  handleUploadedFiles(files: IFile[]): void {
    this.loadingUserForm = true;
    this._auth.user$
      .pipe(
        take(1),
        tap(user => user && (user.avatar = files[0])),
        switchMap(user => this._usersApiService.update(user)),
        tap(() => this._notificationsService.open('Avatar has been changed', 'Got it')),
        tap(() => (this.loadingUserForm = false))
      )
      .subscribe();
  }
}
