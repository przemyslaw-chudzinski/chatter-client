import {Component, Output, EventEmitter, Input, OnInit, OnDestroy} from '@angular/core';
import { IMessage } from '../models/message.model';
import { take, takeWhile, tap, map} from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'chatter-message-editor',
  templateUrl: './message-editor.component.html',
  styleUrls: ['./message-editor.component.scss']
})
export class MessageEditorComponent implements OnInit, OnDestroy {
  @Input() set value(value: string) {
    this._value = value;
    this.content$.next(this._value);
  }

  get value(): string {
    return this._value;
  }

  @Output() messageReady = new EventEmitter<IMessage>();

  @Output() contentChanges = new EventEmitter<string>(null);

  private _value: string;

  private alive = true;

  private content = '';

  content$ = new Subject<string>();

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.content$.pipe(
      takeWhile(() => this.alive),
      map(content => content as string),
      tap(content => (this.content = content)),
      tap(content => this.contentChanges.emit(content))
    ).subscribe();
  }

  ngOnDestroy() {
    this.alive = false;
  }

  sendMessage(): void {
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
      this.content$.next(event.target.innerHTML);
    }
  }
}
