import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChannelsListComponent} from './channels-list/channels-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChannelsListComponent],
  exports: [ChannelsListComponent]
})
export class ChannelsModule { }
