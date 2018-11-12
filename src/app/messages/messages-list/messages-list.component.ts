import {AfterViewInit, Component, Input, OnDestroy, ViewChild} from '@angular/core';
import {ScrollToBottomDirective} from '../directives/scroll-to-bottom.directive';
import {IMessage} from '../models/message.model';
import {Subject} from 'rxjs';
import {takeWhile, tap} from 'rxjs/operators';

@Component({
  selector: 'chatter-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements AfterViewInit, OnDestroy {
  @Input() loading: boolean;
  messages$: Subject<IMessage[]> = new Subject<IMessage[]>();
  private _alive = true;
  @Input() set messages(messages: IMessage[]) {
    this.messages$.next(messages);
  }

  @ViewChild(ScrollToBottomDirective, { read: ScrollToBottomDirective })
  chatterScrollToBottom: ScrollToBottomDirective;

  ngAfterViewInit() {
    this.chatterScrollToBottom && this.messages$
      .pipe(
        takeWhile(() => this._alive),
        tap(messages => messages && messages.length && setTimeout(() => this.chatterScrollToBottom.scrollToBottom()))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this._alive = false;
  }
}
