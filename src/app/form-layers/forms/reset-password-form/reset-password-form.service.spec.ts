import { TestBed, inject } from '@angular/core/testing';

import { ResetPasswordFormService } from './reset-password-form.service';

describe('ResetPasswordFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResetPasswordFormService]
    });
  });

  it('should be created', inject([ResetPasswordFormService], (service: ResetPasswordFormService) => {
    expect(service).toBeTruthy();
  }));
});
