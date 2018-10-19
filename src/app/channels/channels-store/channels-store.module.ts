import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {channelsReducer} from './channels.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ChannelsEffects} from './channels.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('channels', channelsReducer),
    EffectsModule.forFeature([
      ChannelsEffects
    ])
  ],
  declarations: []
})
export class ChannelsStoreModule { }
