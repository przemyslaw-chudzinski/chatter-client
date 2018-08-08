import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {AuthService} from '../../../auth/auth.service';
import {UserSettingsFormComponent} from '../../../forms/form-layers/user-settings-form/user-settings-form.component';
import {take, tap} from 'rxjs/operators';
import {UsersService} from '../../../users/users.service';
import {IUser} from '../../../auth/models/user.model';

@Component({
  selector: 'chatter-user-settings-page',
  templateUrl: './user-settings-page.component.html',
  styleUrls: ['./user-settings-page.component.scss']
})
export class UserSettingsPageComponent implements AfterViewInit {
  @ViewChild('userSettingsForm') private userSettingsForm: UserSettingsFormComponent;
  user: IUser;
  constructor(
    public auth: AuthService,
    private usersService: UsersService
  ) { }

  ngAfterViewInit() {
    this.auth.user$.pipe(
      take(1),
      tap(user => (this.user = user)),
      tap(user => user && this.userSettingsForm.formGroup.patchValue(user))
    ).subscribe();
  }

  submit(): void {
    this.usersService.update(this.userSettingsForm.formGroup.value)
      .pipe(
        take(1),
        tap(updatedUser => this.auth.logOut())
      )
      .subscribe();
  }

}
