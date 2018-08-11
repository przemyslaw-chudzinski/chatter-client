import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ChatterResetPasswordFormService} from './chatter-reset-password-form.service';
import {ChatterFormLayersBase} from '../chatter-form-layers-base';
import {AuthService} from '../../../auth/auth.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'chatter-reset-password-form',
  templateUrl: './chatter-reset-password-form.component.html',
  styleUrls: ['./chatter-reset-password-form.component.scss'],
  exportAs: 'reset-password-form'
})
export class ChatterResetPasswordFormComponent extends ChatterFormLayersBase implements OnInit {
  @Output() onSubmit = new EventEmitter<any>();

  constructor(
    private chatterResetPasswordFormService: ChatterResetPasswordFormService,
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
