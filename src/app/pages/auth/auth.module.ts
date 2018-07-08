import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginIndexComponent } from './login-index/login-index.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { FormLayersModule } from '../../forms/form-layers/form-layers.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from '../../layout/button/button.module';
import { AuthModule as AuthModuleAlias } from '../../auth/auth.module';
import { FormAlertsModule } from '../../layout/form-alerts/form-alerts.module';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: LoginIndexComponent
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
    ButtonModule,
    AuthModuleAlias,
    FormAlertsModule
  ],
  declarations: [LoginIndexComponent, AuthComponent]
})
export class AuthModule {}
