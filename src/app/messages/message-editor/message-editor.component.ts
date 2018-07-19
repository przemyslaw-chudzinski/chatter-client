import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  forwardRef
} from '@angular/core';
import { IMessage } from '../models/message.model';
import { take, tap } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '../../../../node_modules/@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-message-editor',
  templateUrl: './message-editor.component.html',
  styleUrls: ['./message-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MessageEditorComponent),
      multi: true
    }
  ]
})
export class MessageEditorComponent implements OnInit, ControlValueAccessor {
  @Output() messageReady = new EventEmitter<IMessage>();

  value: string;

  constructor(private auth: AuthService) {}

  ngOnInit() {}

  sendMessage(event: Event): void {
    this.auth.user$
      .pipe(
        take(1),
        tap(user => {
          this.value = this.value.trim();
          // tslint:disable-next-line:no-unused-expression
          user &&
            this.value &&
            this.messageReady.emit({
              message: this.value.trim(),
              author: user
            });
        }),
        tap(() => (this.value = '')),
        tap(() => (this.value = null)),
        tap(() => console.log(this.value))
      )
      .subscribe();
  }

  keyupHandler(event: any): void {
    console.log(event);
    if (event.code !== 'Enter') {
      this.value = event.target.innerText;
    } else {
      this.messageReady.emit();
    }
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    console.log('registerOnChange');
  }

  setDisabledState(isDisabled: boolean): void {}

  registerOnTouched(fn: any): void {}
}
