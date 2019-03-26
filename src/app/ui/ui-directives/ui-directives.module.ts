import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollToBottomDirective} from './scroll-to-bottom.directive';
import {ScrollDirective} from './scroll.directive';
import {LoaderBtnDirective} from './loader-btn.directive';
import { IfUserEqualsDirective } from './if-user-equals.directive';
import { DropdownTriggerForDirective } from './dropdown-trigger-for.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ScrollToBottomDirective, ScrollDirective, LoaderBtnDirective, IfUserEqualsDirective, DropdownTriggerForDirective],
  exports: [ScrollToBottomDirective, ScrollDirective, LoaderBtnDirective, IfUserEqualsDirective, DropdownTriggerForDirective]
})
export class UiDirectivesModule { }
