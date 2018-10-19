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
import {SpinnerModule} from '../spinner/spinner.module';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { TopbarUserInfoComponent } from './topbar/topbar-user-info/topbar-user-info.component';
import { LoaderBtnDirective } from './directives/loader-btn.directive';
import {CardModule} from './card/card.module';
import {NotificationsModule} from '../notifications/notifications.module';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    ContactListModule,
    SpinnerModule,
    NotificationsModule
  ],
  declarations: [
    LayoutComponent,
    TopbarComponent,
    UserMenuComponent,
    UserAvatarComponent,
    TopbarUserInfoComponent,
    LoaderBtnDirective
  ],
  exports: [
    LayoutComponent,
    TopbarComponent,
    LoaderBtnDirective,
    CardModule
  ]
})
export class LayoutModule {}
