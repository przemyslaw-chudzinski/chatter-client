import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryNotificationComponent } from './primary-notification/primary-notification.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NotificationsService} from './notifications.service';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  declarations: [PrimaryNotificationComponent],
  entryComponents: [PrimaryNotificationComponent]
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
