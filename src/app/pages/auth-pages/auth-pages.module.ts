import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthPagesComponent } from './auth-pages.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthModule } from '../../auth/auth.module';
import { FormAlertsModule } from '../../layout/form-alerts/form-alerts.module';
import { LoginPageComponent } from './login-page/login-page.component';
import {ChatterFormLayersModule} from '../../chatter-forms/chatter-form-layers/chatter-form-layers.module';

const routes: Routes = [
  {
    path: '',
    component: AuthPagesComponent,
    children: [
      {
        path: '',
        component: LoginPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChatterFormLayersModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AuthModule,
    FormAlertsModule
  ],
  declarations: [
    LoginPageComponent,
    AuthPagesComponent
  ]
})
export class AuthPagesModule {}
