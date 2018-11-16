import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollToBottomDirective} from './scroll-to-bottom.directive';
import {ScrollDirective} from './scroll.directive';
import {LoaderBtnDirective} from './loader-btn.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ScrollToBottomDirective, ScrollDirective, LoaderBtnDirective],
  exports: [ScrollToBottomDirective, ScrollDirective, LoaderBtnDirective]
})
export class UiDirectivesModule { }
