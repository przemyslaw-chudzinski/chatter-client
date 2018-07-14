import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IMessage } from '../models/message.model';
import { take, tap } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-message-editor',
  templateUrl: './message-editor.component.html',
  styleUrls: ['./message-editor.component.scss']
})
export class MessageEditorComponent implements OnInit {
  @Output() messageReady = new EventEmitter<IMessage>();
  contentMessage: string;
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  sendMessage(event: Event): void {
    this.auth.user$
      .pipe(
        take(1),
        tap(user => {
          // tslint:disable-next-line:no-unused-expression
          user &&
            this.messageReady.emit({
              message: this.contentMessage,
              author: user
            });
        }),
        tap(() => (this.contentMessage = ''))
      )
      .subscribe();
  }
}
