import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[chatterMessageEditor]'
})
export class MessageEditorDirective {
  constructor(private elemRef: ElementRef) {}

  @HostListener('keydown.enter', ['$event'])
  keydownEnterHandler(event: KeyboardEvent): void {
    event.preventDefault();
    this.elemRef.nativeElement.innerHTML = '';
  }
}
