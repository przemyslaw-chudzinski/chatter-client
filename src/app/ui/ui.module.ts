import { NgModule } from '@angular/core';
import {CardModule} from './card/card.module';
import {SpinnerModule} from './spinner/spinner.module';
import {UserAvatarModule} from './user-avatar/user-avatar.module';

@NgModule({
  imports: [],
  declarations: [],
  exports: [
    CardModule,
    SpinnerModule,
    UserAvatarModule
  ]
})
export class UiModule { }
