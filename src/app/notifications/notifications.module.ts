import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryNotificationComponent } from './primary-notification/primary-notification.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {AlertsService} from './alerts.service';
import {MatBadgeModule, MatButtonModule, MatCardModule, MatDialogModule, MatIconModule} from '@angular/material';
import { NotificationsDropdownComponent } from './notifications-dropdown/notifications-dropdown.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {A11yModule} from '@angular/cdk/a11y';
import {PortalModule} from '@angular/cdk/portal';
import {UiModule} from '../ui/ui.module';
import {NotificationsStoreModule} from './notifications-store/notifications-store.module';
import { NotificationsListComponent } from './dialogs/notifications-list/notifications-list.component';
import {NotificationInvitationToGroupChatComponent} from './notification-templates/notification-invitation-to-group-chat/notification-invitation-to-group-chat.component';

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
    NotificationsStoreModule,
    MatDialogModule
  ],
  declarations: [PrimaryNotificationComponent, NotificationsDropdownComponent, NotificationInvitationToGroupChatComponent, NotificationsListComponent],
  entryComponents: [PrimaryNotificationComponent, NotificationsListComponent],
  exports: [NotificationsDropdownComponent]
})
export class NotificationsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NotificationsModule,
      providers: [
        AlertsService
      ]
    };
  }
}
