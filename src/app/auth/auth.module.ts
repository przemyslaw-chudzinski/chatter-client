import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { UserNotLoggedGuard } from './guards/user-not-logged.guard';
import { NoAccessDialogComponent } from './dialogs/no-access-dialog/no-access-dialog.component';
import {MatButtonModule, MatDialogModule} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  declarations: [NoAccessDialogComponent],
  exports: [NoAccessDialogComponent],
  entryComponents: [NoAccessDialogComponent]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [AuthService, AuthGuard, UserNotLoggedGuard]
    };
  }
}
