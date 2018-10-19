import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import {MatCardModule, MatProgressBarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule
  ],
  declarations: [CardComponent],
  exports: [CardComponent]
})
export class CardModule { }
