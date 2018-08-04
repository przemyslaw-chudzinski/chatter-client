import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BackdropComponent } from './backdrop/backdrop.component';

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule],
  declarations: [SpinnerComponent, BackdropComponent],
  exports: [SpinnerComponent]
})
export class SpinnerModule {}
