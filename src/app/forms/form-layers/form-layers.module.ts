import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginFormService } from './login-form/login-form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component';
import { ForgotPasswordFormService } from './forgot-password-form/forgot-password-form.service';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';
import {UserSettingsFormService} from './user-settings-form/user-settings-form.service';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import {ResetPasswordFormService} from './reset-password-form/reset-password-form.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [LoginFormComponent, ForgotPasswordFormComponent, UserSettingsFormComponent, ResetPasswordFormComponent],
  exports: [LoginFormComponent, ForgotPasswordFormComponent, UserSettingsFormComponent, ResetPasswordFormComponent]
})
export class FormLayersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FormLayersModule,
      providers: [LoginFormService, ForgotPasswordFormService, UserSettingsFormService, ResetPasswordFormService]
    };
  }
}
