import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { UserNotLoggedGuard } from './guards/user-not-logged.guard';

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [AuthService, AuthGuard, UserNotLoggedGuard]
    };
  }
}
