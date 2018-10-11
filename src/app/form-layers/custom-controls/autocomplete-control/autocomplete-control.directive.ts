import {Directive, ElementRef, EventEmitter, HostListener, Output, Renderer2} from '@angular/core';

@Directive({
  selector: '[chatterAutocompleteControl]'
})
export class AutocompleteControlDirective {
  @Output() onChangeText = new EventEmitter<string>();

  constructor(
    private _elemRef: ElementRef,
    private _renderer: Renderer2
  ) {}

  @HostListener('input', ['$event'])
  changeText(event): void {
    this.onChangeText.emit(event.target.value);
  }

  clearInput(): void {
    this._renderer.setProperty(this._elemRef.nativeElement, 'value', '');
  }

  focus(): void {
    this._elemRef.nativeElement.focus();
  }

}
