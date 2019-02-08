import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollToBottomDirective} from './scroll-to-bottom.directive';
import {ScrollDirective} from './scroll.directive';
import {LoaderBtnDirective} from './loader-btn.directive';
import { IfUserEqualsDirective } from './if-user-equals.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ScrollToBottomDirective, ScrollDirective, LoaderBtnDirective, IfUserEqualsDirective],
  exports: [ScrollToBottomDirective, ScrollDirective, LoaderBtnDirective, IfUserEqualsDirective]
})
export class UiDirectivesModule { }
