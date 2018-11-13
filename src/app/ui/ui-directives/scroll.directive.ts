import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {IScrollEvent} from './models/scroll-event.model';

@Directive({
  selector: '[chatterScroll]'
})
export class ScrollDirective {
  @Output() onScroll = new EventEmitter<IScrollEvent>();

  @HostListener('scroll', ['$event'])
  handleScroll(event): void {
    const scrollTop = event.target.scrollTop;
    this.onScroll.emit({
      scrollTop
    });
  }
}
