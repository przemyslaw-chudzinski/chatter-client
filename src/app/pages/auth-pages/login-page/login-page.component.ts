import {Component} from '@angular/core';
import {EAlertTypes} from '../../../layout/form-alerts/enums/alert-types.enum';

@Component({
  selector: 'chatter-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  showLoginForm = true;
  alertMessage: string;
  alertVisible: boolean;
  alertType: EAlertTypes;

  constructor() {}

  toggleForms(): void {
    this.showLoginForm = !this.showLoginForm;
    this.alertVisible = false;
  }

  onErrorHandler(message: string): void {
    this.alertVisible = true;
    this.alertMessage = message;
    this.alertType = EAlertTypes.danger;
  }
}
