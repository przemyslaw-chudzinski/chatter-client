import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import {ContactListModule} from '../contact-list/contact-list.module';
import { TopbarUserInfoComponent } from './topbar/topbar-user-info/topbar-user-info.component';
import {NotificationsModule} from '../notifications/notifications.module';
import {UiModule} from '../ui/ui.module';
import {MatDividerModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    RouterModule,
    ContactListModule,
    UiModule,
    NotificationsModule
  ],
  declarations: [
    LayoutComponent,
    TopbarComponent,
    UserMenuComponent,
    TopbarUserInfoComponent
  ],
  exports: [
    LayoutComponent,
    TopbarComponent
  ]
})
export class LayoutModule {}
