import { TestBed, inject } from '@angular/core/testing';

import { ChatterForgotPasswordFormService } from './chatter-forgot-password-form.service';

describe('ForgotPasswordFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatterForgotPasswordFormService]
    });
  });

  it('should be created', inject([ChatterForgotPasswordFormService], (service: ChatterForgotPasswordFormService) => {
    expect(service).toBeTruthy();
  }));
});
