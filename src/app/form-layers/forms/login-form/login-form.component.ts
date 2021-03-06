import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { LoginFormService } from './login-form.service';
import { FormLayersAbstract } from '../../form-layers.abstract';
import {catchError, take, tap} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';
import {AuthService} from '../../../auth/auth.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'chatter-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  exportAs: 'chatter-login-form'
})
export class LoginFormComponent extends FormLayersAbstract implements OnInit {
  @Output() onError = new EventEmitter<any>();
  @Output() onReset = new EventEmitter<null>();
  @Output() onSuccess = new EventEmitter<any>();
  private _isSending: boolean;

  get isSending(): boolean {
    return this._isSending;
  }

  constructor(
    private loginFormService: LoginFormService,
    private auth: AuthService
  ) {
    super();
  }

  ngOnInit() {
    this.formGroup = this.loginFormService.init();
  }

  signIn(): void {
    this._isSending = true;
    this.onReset.emit();
    if (this.isValid) {
      this.auth
        .signIn(this.formGroup.value)
        .pipe(
          take(1),
          tap(response => this.onSuccess.emit(response)),
          tap(() => (this._isSending = false)),
          catchError((err: HttpErrorResponse) => of(this.onError.emit(err.error.message))
            .pipe(
              tap(() => (this._isSending = false))
            )),
        )
        .subscribe();
    }
  }
}
