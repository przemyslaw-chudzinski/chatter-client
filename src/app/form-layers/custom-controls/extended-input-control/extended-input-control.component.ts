import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ControlValueAccessorAbstract} from '../control-value-accessor.abstract';

@Component({
  selector: 'chatter-extended-input-control',
  templateUrl: './extended-input-control.component.html',
  styleUrls: ['./extended-input-control.component.scss']
})
export class ExtendedInputControlComponent extends ControlValueAccessorAbstract<string> {

  @Input() type: string;
  @Input() disabled: boolean;
  @Input() editState: boolean;

  @Output() onSaved = new EventEmitter<string>();

  constructor() {
    super();
  }

  toggle(): void {
    this.editState = !this.editState;
  }

  close(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();

    this.editState = false;
  }

  open(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
    this.editState = true;
  }

  handleSave(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
    this.onSaved.emit(this.value)
  }

  handleValueChange(event: any): void {
    this.value = event.target.value as string;
    this.onChange(this.value);
  }

}
