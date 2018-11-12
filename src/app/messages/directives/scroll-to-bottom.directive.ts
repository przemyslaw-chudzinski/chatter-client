import {
  Directive,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[chatterScrollToBottom]'
})
export class ScrollToBottomDirective {

  constructor(private elemRef: ElementRef) {}

  scrollToBottom(): void {
    this.elemRef.nativeElement.scrollTop =
      this.elemRef.nativeElement.scrollHeight -
      this.elemRef.nativeElement.offsetHeight +
      10;
  }
}
