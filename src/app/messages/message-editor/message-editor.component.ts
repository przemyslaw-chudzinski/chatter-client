import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Input()
  set value(value: string) {
    this._value = value;
  }
  @Output() messageReady = new EventEmitter<IMessage>();

  private _value = '';

  get value(): string {
    return this._value;
  }

  constructor(private auth: AuthService) {}

  ngOnInit() {}

  sendMessage(event: Event): void {
    this.auth.user$
      .pipe(
        take(1),
        tap(() => (this.value = this.value.trim())),
        tap(
          user =>
            user &&
            this.value &&
            this.messageReady.emit({
              message: this.value.trim(),
              author: user
            })
        ),
        tap(() => (this.value = ''))
      )
      .subscribe();
  }

  keyupHandler(event: any): void {
    event.code !== 'Enter'
      ? (this.value = event.target.innerText)
      : this.messageReady.emit();
  }
}
