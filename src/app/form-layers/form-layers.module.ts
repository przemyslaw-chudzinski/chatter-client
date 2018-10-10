import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { LoginFormService } from './forms/login-form/login-form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ForgotPasswordFormComponent } from './forms/forgot-password-form/forgot-password-form.component';
import { ForgotPasswordFormService } from './forms/forgot-password-form/forgot-password-form.service';
import { UserSettingsFormComponent } from './forms/user-settings-form/user-settings-form.component';
import { ResetPasswordFormComponent } from './forms/reset-password-form/reset-password-form.component';
import {ResetPasswordFormService} from './forms/reset-password-form/reset-password-form.service';
import {UserSettingsFormService} from './forms/user-settings-form/user-settings-form.service';
import {MatchFieldsDirective} from './validators/match-fields.directive';
import {ValidatorsService} from './validators/validators.service';
import {SpinnerModule} from '../spinner/spinner.module';
import { ValidationFeedbackComponent } from './validation-feedback/validation-feedback.component';
import { CreateGroupConversationFormComponent } from './forms/create-group-conversation-form/create-group-conversation-form.component';
import {MatAutocompleteModule, MatChipsModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SpinnerModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule
  ],
  declarations: [
    LoginFormComponent,
    ForgotPasswordFormComponent,
    UserSettingsFormComponent,
    ResetPasswordFormComponent,
    MatchFieldsDirective,
    ValidationFeedbackComponent,
    CreateGroupConversationFormComponent
  ],
  exports: [
    LoginFormComponent,
    ForgotPasswordFormComponent,
    UserSettingsFormComponent,
    ResetPasswordFormComponent,
    MatchFieldsDirective,
    ValidationFeedbackComponent,
    CreateGroupConversationFormComponent
  ]
})
export class FormLayersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FormLayersModule,
      providers: [
        LoginFormService,
        ForgotPasswordFormService,
        UserSettingsFormService,
        ResetPasswordFormService,
        ValidatorsService
      ]
    };
  }
}
