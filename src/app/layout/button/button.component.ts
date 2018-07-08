import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EButtonTypes } from './enums/button-types.enum';
import { ButtonService } from './button.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  // Inputs
  @Input() buttonType: EButtonTypes = EButtonTypes.basic;
  @Input() color: string;
  @Input() disabled: boolean;
  @Input() icon: string;
  @Input() loading: boolean;

  // Outputs
  @Output() clicked: EventEmitter<Event> = new EventEmitter<Event>();

  constructor(public buttonService: ButtonService) {}

  ngOnInit() {}

  clickHandler(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.clicked.emit(event);
  }
}
/**
 * TODO:
 *
 * 1. Add support for mat-stroked-button
 *
 * 2. Add support for mat-flat button
 *
 * 3. Add support for ng content
 *
 * 4. Add support for mat-menu-item button
 */
