import { TestBed, inject } from '@angular/core/testing';

import { ChatterResetPasswordFormService } from './chatter-reset-password-form.service';

describe('ResetPasswordFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatterResetPasswordFormService]
    });
  });

  it('should be created', inject([ChatterResetPasswordFormService], (service: ChatterResetPasswordFormService) => {
    expect(service).toBeTruthy();
  }));
});
