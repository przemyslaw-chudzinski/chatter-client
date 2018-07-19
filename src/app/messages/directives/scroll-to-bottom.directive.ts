import {
  Directive,
  ElementRef,
  SimpleChanges,
  Input,
  OnChanges
} from '@angular/core';
import { IMessage } from '../models/message.model';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[chatterScrollToBottom]'
})
export class ScrollToBottomDirective implements OnChanges {
  @Input() chatterScrollToBottom: IMessage[] = [];

  constructor(private elemRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.chatterScrollToBottom.currentValue &&
      changes.chatterScrollToBottom.currentValue.length
    ) {
      setTimeout(() => {
        this.scrollToBottom();
      });
    }
  }

  scrollToBottom(): void {
    this.elemRef.nativeElement.scrollTop =
      this.elemRef.nativeElement.scrollHeight -
      this.elemRef.nativeElement.offsetHeight +
      10;
  }
}
