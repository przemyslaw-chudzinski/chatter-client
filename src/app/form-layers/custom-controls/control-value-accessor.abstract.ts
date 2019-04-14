import {ControlValueAccessor} from '@angular/forms';

export abstract class ControlValueAccessorAbstract<T = any> implements ControlValueAccessor {

  private _onChange: (value: T) => void;
  private _value: T;

  get onChange(): (value: T) => void {
    return this._onChange;
  }

  get value(): T {
    return this._value;
  }

  set value(value: T) {
    this._value = value;
    this._onChange(this._value);
  }

  registerOnChange(fn: (value: T) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: T): void {
    this.value = value;
  }

  setValue(value: T): void {
    this._value = value;
  }

}
