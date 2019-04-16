import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogService} from './dialog.service';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DialogContainerComponent, DialogContentComponent],
  providers: [DialogService],
  entryComponents: [DialogContainerComponent],
  exports: [DialogContentComponent]
})
export class DialogModule { }
