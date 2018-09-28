import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsPageComponent } from './user-settings-page/user-settings-page.component';
import {RouterModule, Routes} from '@angular/router';
import {AccountPagesComponent} from './account-pages.component';
import {MatButtonModule} from '@angular/material';
import {SpinnerModule} from '../../spinner/spinner.module';
import {FormLayersModule} from '../../form-layers/form-layers.module';
import {LayoutModule} from '../../layout/layout.module';

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
    MatButtonModule,
    SpinnerModule,
    LayoutModule
  ],
  declarations: [UserSettingsPageComponent, AccountPagesComponent]
})
export class AccountPagesModule { }
