import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';
import { ButtonService } from './button.service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  providers: [ButtonService]
})
export class ButtonModule {}
