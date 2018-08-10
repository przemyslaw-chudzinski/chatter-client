import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ChatterLoginFormService } from './chatter-login-form.service';
import { ChatterFormLayersBase } from '../chatter-form-layers-base';
import {catchError, take, tap} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';
import {AuthService} from '../../../auth/auth.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'chatter-login-form',
  templateUrl: './chatter-login-form.component.html',
  styleUrls: ['./chatter-login-form.component.scss'],
  exportAs: 'chatter-login-form'
})
export class ChatterLoginFormComponent extends ChatterFormLayersBase implements OnInit {
  @Output() onError = new EventEmitter<string>();
  @Output() onReset = new EventEmitter<null>();
  @Output() onSuccess = new EventEmitter<any>();

  constructor(
    private loginFormService: ChatterLoginFormService,
    private auth: AuthService
  ) {
    super();
  }

  ngOnInit() {
    this.formGroup = this.loginFormService.init();
  }

  signIn(): void {
    this.onReset.emit();
    if (this.isValid) {
      this.auth
        .singIn(this.formGroup.value)
        .pipe(
          take(1),
          tap(response => this.onSuccess.emit(response)),
          catchError((err: HttpErrorResponse) => of(this.onError.emit(err.error.message)))
        )
        .subscribe();
    }
  }
}
