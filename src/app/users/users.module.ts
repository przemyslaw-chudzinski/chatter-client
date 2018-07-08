import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './users.service';

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class UsersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UsersModule,
      providers: [UsersService]
    };
  }
}
