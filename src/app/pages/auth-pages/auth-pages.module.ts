import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthPagesComponent } from './auth-pages.component';
import { FormLayersModule } from '../../forms/form-layers/form-layers.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthModule as AuthModuleAlias } from '../../auth/auth.module';
import { FormAlertsModule } from '../../layout/form-alerts/form-alerts.module';
import { LoginPageComponent } from './login-page/login-page.component';

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
    FormLayersModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AuthModuleAlias,
    FormAlertsModule
  ],
  declarations: [LoginPageComponent, AuthPagesComponent]
})
export class AuthPagesModule {}
