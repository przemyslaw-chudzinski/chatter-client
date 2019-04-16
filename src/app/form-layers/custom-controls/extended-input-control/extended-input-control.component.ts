import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const EXTENDED_INPUT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ExtendedInputControlComponent),
  multi: true,
};

@Component({
  selector: 'chatter-extended-input-control',
  templateUrl: './extended-input-control.component.html',
  styleUrls: ['./extended-input-control.component.scss'],
  providers: [EXTENDED_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class ExtendedInputControlComponent implements ControlValueAccessor {

  @Input() type = 'text';
  @Input() disabled: boolean;
  @Input() editState: boolean;

  @Output() onSave = new EventEmitter<string>();

  value: string = null;
  defaultValue: string = null;

  private propagateChange = (_: string) => {};
  private initControl = true;

  registerOnTouched(fn: any): void {}

  writeValue(value: string): void {
    this.value = value;
    if (this.initControl) {
      this.defaultValue = value;
      this.initControl = false;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  close(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
    this.writeValue(this.defaultValue);
    this.propagateChange(this.defaultValue);
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
    this.onSave.emit(this.value);
  }

  handleValueChange(event: any): void {
    const value = event.target.value;
    this.value = value;
    this.propagateChange(value);
  }

}
