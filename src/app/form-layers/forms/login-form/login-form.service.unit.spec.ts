import {LoginFormService} from './login-form.service';
import {FormBuilder, FormGroup} from '@angular/forms';

describe('login form service - init function', () => {
  let loginFormService;
  const fb = new FormBuilder();
  let formGroup: FormGroup;

  beforeEach(() => {
    loginFormService = new LoginFormService(fb);
    formGroup = loginFormService.init();
  });

  it('should have implemented init function', () => {
    expect(typeof loginFormService.init !== 'undefined').toBeTruthy();
  });

  it('should return FormGroup object', () => {
    // const _formGroup = loginFormService.init();
    // expect().toBeTruthy();
  });

  it('should create a form with 2 controls email and password', () => {
    formGroup = loginFormService.init();
    expect(formGroup.contains('email')).toBeTruthy();
    expect(formGroup.contains('password')).toBeTruthy();
  });

  it('email control should be required', () => {
    formGroup.controls.email.setValue('');
    expect(formGroup.controls.email.invalid).toBeTruthy();
  });

  it('email control should have email pattern validator', () => {
    formGroup.controls.email.setValue('asdasd');
    expect(formGroup.controls.email.invalid).toBeTruthy();
  });

  it('password control should be required', () => {
    formGroup.controls.password.setValue('');
    expect(formGroup.controls.password.invalid).toBeTruthy();
  });

});
