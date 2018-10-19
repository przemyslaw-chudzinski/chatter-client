import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryNotificationComponent } from './primary-notification/primary-notification.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NotificationsService} from './notifications.service';
import {MatBadgeModule, MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import { NotificationsDropdownComponent } from './notifications-dropdown/notifications-dropdown.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {A11yModule} from '@angular/cdk/a11y';
import {PortalModule} from '@angular/cdk/portal';
import { NotificationsDropdownContentComponent } from './notifications-dropdown/notifications-dropdown-content/notifications-dropdown-content.component';
import {CardModule} from '../ui/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    OverlayModule,
    A11yModule,
    MatCardModule,
    PortalModule,
    CardModule
  ],
  declarations: [PrimaryNotificationComponent, NotificationsDropdownComponent, NotificationsDropdownContentComponent],
  entryComponents: [PrimaryNotificationComponent, NotificationsDropdownContentComponent],
  exports: [NotificationsDropdownComponent]
})
export class NotificationsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NotificationsModule,
      providers: [
        NotificationsService
      ]
    };
  }
}
