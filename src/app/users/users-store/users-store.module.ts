import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {usersReducer} from './users.reducer';
import {EffectsModule} from '@ngrx/effects';
import {UsersEffects} from './users.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forFeature([
      UsersEffects
    ])
  ],
  declarations: []
})
export class UsersStoreModule { }
