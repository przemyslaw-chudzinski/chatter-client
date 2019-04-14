import {Component, Input, OnDestroy} from '@angular/core';
import {IMessage} from '../models/message.model';
import {Subject} from 'rxjs';

@Component({
  selector: 'chatter-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnDestroy {
  @Input() loading: boolean;
  @Input() set messages(messages: IMessage[]) {
    this.messages$.next(messages);
  }
  messages$: Subject<IMessage[]> = new Subject<IMessage[]>();
  private alive = true;

  ngOnDestroy() {
    this.alive = false;
  }
}
