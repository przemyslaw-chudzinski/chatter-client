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
import {UiModule} from '../ui/ui.module';
import {NotificationsStoreModule} from './notifications-store/notifications-store.module';
import { NotificationInvitationToGroupChatComponent } from './notifications-dropdown/notifications-dropdown-content/notification-invitation-to-group-chat/notification-invitation-to-group-chat.component';

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
    UiModule,
    NotificationsStoreModule
  ],
  declarations: [PrimaryNotificationComponent, NotificationsDropdownComponent, NotificationsDropdownContentComponent, NotificationInvitationToGroupChatComponent],
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
