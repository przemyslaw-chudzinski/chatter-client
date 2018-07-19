import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ContactComponent } from './contact-list/contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ButtonNotificationComponent } from './button-notification/button-notification.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
// import { SpinnerComponent } from './spinner/spinner.component';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { SpinnerModule } from './spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    RouterModule,
    MatTabsModule
    // MatProgressSpinnerModule,
    // SpinnerModule
  ],
  declarations: [
    LayoutComponent,
    TopbarComponent,
    ContactComponent,
    ContactListComponent,
    ButtonNotificationComponent,
    UserMenuComponent
    // SpinnerComponent
  ],
  exports: [LayoutComponent, TopbarComponent]
})
export class LayoutModule {}
