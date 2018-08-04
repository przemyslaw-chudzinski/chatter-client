import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ButtonNotificationComponent } from './button-notification/button-notification.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import {ContactListModule} from '../contact-list/contact-list.module';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    ContactListModule
  ],
  declarations: [
    LayoutComponent,
    TopbarComponent,
    ButtonNotificationComponent,
    UserMenuComponent
  ],
  exports: [LayoutComponent, TopbarComponent]
})
export class LayoutModule {}
