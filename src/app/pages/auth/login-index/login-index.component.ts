import { Component, ViewChild } from '@angular/core';
import { LoginFormComponent } from '../../../forms/form-layers/login-form/login-form.component';
import { ForgotPasswordFormComponent } from '../../../forms/form-layers/forgot-password-form/forgot-password-form.component';
import { AuthService } from '../../../auth/auth.service';
import { take, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { HttpErrorResponse } from '../../../../../node_modules/@angular/common/http';
import { EAlertTypes } from '../../../layout/form-alerts/enums/alert-types.enum';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.scss']
})
export class LoginIndexComponent {
  showLoginForm = true;
  alertMessage: string;
  alertVisible: boolean;
  alertType: EAlertTypes;

  @ViewChild('chatterLoginForm') chatterLoginForm: LoginFormComponent;
  @ViewChild('chatterForgotPasswordForm')
  chatterForgotPasswordForm: ForgotPasswordFormComponent;

  constructor(private auth: AuthService) {}

  toggleForms(): void {
    this.showLoginForm = !this.showLoginForm;
    this.alertVisible = false;
  }

  signIn(event: Event): void {
    this.alertVisible = false;
    if (this.chatterLoginForm.isValid) {
      this.auth
        .singIn(this.chatterLoginForm.formGroup.value)
        .pipe(
          take(1),
          catchError(err => of(this.errorHandler(err)))
        )
        .subscribe();
    }
  }

  private errorHandler(err: HttpErrorResponse): void {
    switch (err.status) {
      case 400:
        this.alertMessage = err.error.message;
        this.alertType = EAlertTypes.danger;
        this.alertVisible = true;
        this.chatterLoginForm.reset();
        break;
    }
  }
}
