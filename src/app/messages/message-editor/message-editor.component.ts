import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IMessage } from '../models/message.model';
import { take, tap } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-message-editor',
  templateUrl: './message-editor.component.html',
  styleUrls: ['./message-editor.component.scss']
})
export class MessageEditorComponent {
  @Input()
  set value(value: string) {
    this._value = value;
    this.content = value;
  }
  @Output() messageReady = new EventEmitter<IMessage>();
  private _value: string;
  get value(): string {
    return this._value;
  }
  private content = '';

  constructor(private auth: AuthService) {}

  sendMessage(event: Event): void {
    this.auth.user$
      .pipe(
        take(1),
        tap(() => (this.content = this.content.trim())),
        tap(
          user =>
            user &&
            this.content &&
            this.messageReady.emit({
              content: this.content.trim(),
              author: user
            })
        ),
        tap(() => (this.content = ''))
      )
      .subscribe();
  }

  keyupHandler(event: any): void {
    if (event.code !== 'Enter') {
      this.content = event.target.innerHTML;
    }
  }
}
