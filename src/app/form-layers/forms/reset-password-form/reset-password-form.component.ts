import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ResetPasswordFormService} from './reset-password-form.service';
import {FormLayersAbstract} from '../../form-layers.abstract';
import {AuthService} from '../../../auth/auth.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'chatter-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss'],
  exportAs: 'reset-password-form'
})
export class ResetPasswordFormComponent extends FormLayersAbstract implements OnInit {
  @Output() onSubmit = new EventEmitter<any>();

  constructor(
    private chatterResetPasswordFormService: ResetPasswordFormService,
    private auth: AuthService
  ) {
    super();
  }

  ngOnInit() {
    this.formGroup = this.chatterResetPasswordFormService.init();
  }

  resetPassword(): void {
    console.log('sending request to db');
    this.auth.resetPassword().pipe(
      tap(response => this.onSubmit.emit(response))
    ).subscribe();
  }

}
