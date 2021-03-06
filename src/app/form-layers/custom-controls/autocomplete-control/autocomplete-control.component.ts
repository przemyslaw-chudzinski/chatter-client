import {Component, forwardRef, Input, TemplateRef, ViewChild} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {IAutocompleteData} from '../../models/autocomplete-data.model';
import {MatAutocompleteSelectedEvent, MatAutocompleteTrigger} from '@angular/material';
import {AutocompleteControlDirective} from './autocomplete-control.directive';
import {ControlValueAccessorAbstract} from '../control-value-accessor.abstract';

export const AUTOCOMPLETE_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AutocompleteControlComponent),
  multi: true,
};

@Component({
  selector: 'chatter-autocomplete-control',
  templateUrl: './autocomplete-control.component.html',
  styleUrls: ['./autocomplete-control.component.scss'],
  providers: [AUTOCOMPLETE_CONTROL_VALUE_ACCESSOR]
})
export class AutocompleteControlComponent extends ControlValueAccessorAbstract {
  @Input() removable = true;
  @Input() chipsTpl: TemplateRef<any> = null;
  @Input() autocompleteItemTpl: TemplateRef<any> = null;
  @Input() mapValuesTo: (item: any) => IAutocompleteData = null;
  @Input() set autocompleteData(data: any) {
    this._autocompleteData = data;
    this.currentAutocompleteData = data;
  }
  private _autocompleteData: any[] = [];
  @ViewChild(AutocompleteControlDirective, {read: AutocompleteControlDirective}) private _input: AutocompleteControlDirective;
  @ViewChild(MatAutocompleteTrigger, {read: MatAutocompleteTrigger}) private _autocomplete: MatAutocompleteTrigger;
  selectedItems: IAutocompleteData[] = [];
  currentAutocompleteData: any[] = [];

  writeValue(value: any[]): void {
    this.setValue(value);
    if (value && value.length) {
      const _selectedItems = this.currentAutocompleteData.filter(item => value.includes(this._mapData(item).value));
      this.selectedItems = _selectedItems.map(item => this._mapData(item));
      this._clearAutocompleteList(value);
    }
  }

  remove(item: IAutocompleteData): void {
    this._removeFromValue(item.value);
    this._remove(item, this.selectedItems);
    const _item = this._autocompleteData.find(i => i._id === item.value);
    if (_item) {
      const _currentAutocompleteData = [...this.currentAutocompleteData];
      _currentAutocompleteData.push(_item);
      this.currentAutocompleteData = _currentAutocompleteData;
    }
    this._input.focus();
    this._clearAutocompleteList(this.value);
    this.openAutocomplete();
  }

  optionSelectedHandler(event: MatAutocompleteSelectedEvent): void {
    const _mappedItem = this._mapData(event.option.value);
    this.value = this.value || [];
    const _value = [...this.value] || [];
    this.selectedItems.push(_mappedItem);
    _value.push(_mappedItem.value);
    this.value = _value;
    this._input.clearInput();
    this._clearAutocompleteList(this.value);
    this.openAutocomplete();
  }

  getContext(item: IAutocompleteData): any {
    return {
      item,
      $implicit: item
    };
  }

  filterData(value: string): void {
    if (!this.value || !this.value.length) {
      this.value = this.value || [];
      this.currentAutocompleteData = [...this._autocompleteData];
    }
    const filterValue = value.toLowerCase();
    this.currentAutocompleteData = this._autocompleteData.filter(item =>
      this._mapData(item).label.toLowerCase().indexOf(filterValue) === 0 && !this.value.includes(this._mapData(item).value));
  }

  openAutocomplete(): void {
    this._autocomplete.openPanel();
  }

  private _remove(item: IAutocompleteData, stack: any[]): void {
    const index = stack.indexOf(item);
    if (index >= 0) stack.splice(index, 1);
  }

  private _removeFromValue(item: IAutocompleteData): void {
    const _value = [...this.value];
    const index = _value.indexOf(item);
    if (index >= 0) _value.splice(index, 1);
    this.value = _value;
  }

  private _mapData(item: any): IAutocompleteData {
    return this.mapValuesTo ? this.mapValuesTo(item) : item;
  }

  private _clearAutocompleteList(value: any[]): void {
    if (!value || !value.length) this.currentAutocompleteData = [...this._autocompleteData];
    else this.currentAutocompleteData = [...this._autocompleteData].filter(i => !value.includes(this._mapData(i).value));
  }
}
