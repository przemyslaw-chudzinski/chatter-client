import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsPageComponent } from './user-settings-page/user-settings-page.component';
import {RouterModule, Routes} from '@angular/router';
import {AccountPagesComponent} from './account-pages.component';
import {FormLayersModule} from '../../forms/form-layers/form-layers.module';
import {MatButtonModule} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: AccountPagesComponent,
    children: [
      {
        path: '',
        component: UserSettingsPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormLayersModule,
    MatButtonModule
  ],
  declarations: [UserSettingsPageComponent, AccountPagesComponent]
})
export class AccountPagesModule { }
