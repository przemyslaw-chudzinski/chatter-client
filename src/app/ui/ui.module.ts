import { NgModule } from '@angular/core';
import {CardModule} from './card/card.module';
import {SpinnerModule} from './spinner/spinner.module';
import {UserAvatarModule} from './user-avatar/user-avatar.module';
import {UiDirectivesModule} from './ui-directives/ui-directives.module';
import {DialogModule} from './dialog/dialog.module';

@NgModule({
  exports: [
    CardModule,
    SpinnerModule,
    UserAvatarModule,
    UiDirectivesModule,
    DialogModule
  ]
})
export class UiModule { }
