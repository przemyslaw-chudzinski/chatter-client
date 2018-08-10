import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatterLoginFormComponent } from './chatter-login-form/chatter-login-form.component';
import { ChatterLoginFormService } from './chatter-login-form/chatter-login-form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ChatterForgotPasswordFormComponent } from './chatter-forgot-password-form/chatter-forgot-password-form.component';
import { ChatterForgotPasswordFormService } from './chatter-forgot-password-form/chatter-forgot-password-form.service';
import { ChatterUserSettingsFormComponent } from './chatter-user-settings-form/chatter-user-settings-form.component';
import { ChatterResetPasswordFormComponent } from './chatter-reset-password-form/chatter-reset-password-form.component';
import {ChatterResetPasswordFormService} from './chatter-reset-password-form/chatter-reset-password-form.service';
import {ChatteruserSettingsFormService} from './chatter-user-settings-form/chatteruser-settings-form.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    ChatterLoginFormComponent,
    ChatterForgotPasswordFormComponent,
    ChatterUserSettingsFormComponent,
    ChatterResetPasswordFormComponent
  ],
  exports: [
    ChatterLoginFormComponent,
    ChatterForgotPasswordFormComponent,
    ChatterUserSettingsFormComponent,
    ChatterResetPasswordFormComponent
  ]
})
export class ChatterFormLayersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ChatterFormLayersModule,
      providers: [
        ChatterLoginFormService,
        ChatterForgotPasswordFormService,
        ChatteruserSettingsFormService,
        ChatterResetPasswordFormService
      ]
    };
  }
}
