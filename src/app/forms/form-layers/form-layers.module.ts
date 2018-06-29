import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginFormService } from './login-form/login-form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component';
import { ForgotPasswordFormService } from './forgot-password-form/forgot-password-form.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [LoginFormComponent, ForgotPasswordFormComponent],
  exports: [LoginFormComponent, ForgotPasswordFormComponent]
})
export class FormLayersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FormLayersModule,
      providers: [LoginFormService, ForgotPasswordFormService]
    };
  }
}
