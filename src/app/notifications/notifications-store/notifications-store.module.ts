import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {notificationsReducer} from './notifications-store.reducer';
import {EffectsModule} from '@ngrx/effects';
import {NotificationsEffects} from './notifications-store.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('notifications', notificationsReducer),
    EffectsModule.forFeature([NotificationsEffects])
  ],
  declarations: []
})
export class NotificationsStoreModule { }
