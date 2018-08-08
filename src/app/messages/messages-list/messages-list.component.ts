import { Component, Input, ViewChild, AfterViewChecked } from '@angular/core';
import { ScrollToBottomDirective } from '../directives/scroll-to-bottom.directive';
import { IMessage } from '../models/message.model';

@Component({
  selector: 'chatter-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements AfterViewChecked {
  @Input() messages: IMessage[];
  @Input() loading: boolean;

  @ViewChild(ScrollToBottomDirective, { read: ScrollToBottomDirective })
  chatterScrollToBottom: ScrollToBottomDirective;

  constructor() {}

  ngAfterViewChecked() {
    // tslint:disable-next-line:no-unused-expression
    this.chatterScrollToBottom && this.chatterScrollToBottom.scrollToBottom();
  }
}
