import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersApiService } from './users-api.service';
import {UsersStoreModule} from './users-store/users-store.module';

@NgModule({
  imports: [CommonModule, UsersStoreModule],
  declarations: []
})
export class UsersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UsersModule,
      providers: [UsersApiService]
    };
  }
}
