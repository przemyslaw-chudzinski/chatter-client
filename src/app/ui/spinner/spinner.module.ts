import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BackdropComponent } from './backdrop/backdrop.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule],
  declarations: [SpinnerComponent, BackdropComponent, LoaderComponent],
  exports: [SpinnerComponent, LoaderComponent]
})
export class SpinnerModule {}
