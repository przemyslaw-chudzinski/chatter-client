import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {messagesReducer} from './messages.reducer';
import {EffectsModule} from '@ngrx/effects';
import {MessagesEffects} from './messages.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('messages', messagesReducer),
    EffectsModule.forFeature([
      MessagesEffects
    ])
  ],
  declarations: []
})
export class MessagesStoreModule { }
