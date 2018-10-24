import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'chatter-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() color: ThemePalette = 'primary';
  @Input() diameter = 80;
  @Input() mode: ProgressSpinnerMode = 'indeterminate';
  @Input() strokeWidth = 3;
  @Input() value: number;
  @Input() showBackdrop: boolean;
}
