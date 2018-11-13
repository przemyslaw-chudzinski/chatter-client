import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollToBottomDirective} from './scroll-to-bottom.directive';
import {ScrollDirective} from './scroll.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ScrollToBottomDirective, ScrollDirective],
  exports: [ScrollToBottomDirective, ScrollDirective]
})
export class UiDirectivesModule { }
