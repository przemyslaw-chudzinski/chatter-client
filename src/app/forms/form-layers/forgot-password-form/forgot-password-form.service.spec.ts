import { TestBed, inject } from '@angular/core/testing';

import { ForgotPasswordFormService } from './forgot-password-form.service';

describe('ForgotPasswordFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForgotPasswordFormService]
    });
  });

  it('should be created', inject([ForgotPasswordFormService], (service: ForgotPasswordFormService) => {
    expect(service).toBeTruthy();
  }));
});
