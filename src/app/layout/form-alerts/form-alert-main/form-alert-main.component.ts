import { Component, Input } from '@angular/core';
import { EAlertTypes } from '../enums/alert-types.enum';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-form-alert-main',
  templateUrl: './form-alert-main.component.html',
  styleUrls: ['./form-alert-main.component.scss']
})
export class FormAlertMainComponent {
  @Input() visible: boolean;
  @Input() message = '';
  @Input() type: EAlertTypes;

  constructor() {}

  getAlertClass(): string {
    switch (this.type) {
      case EAlertTypes.danger:
        return 'chatter-form-alert-warn';
      case EAlertTypes.success:
        return 'chatter-form-alert-success';
    }
  }
}
