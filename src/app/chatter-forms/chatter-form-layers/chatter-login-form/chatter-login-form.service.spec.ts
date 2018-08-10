import { TestBed, inject } from '@angular/core/testing';

import { ChatterLoginFormService } from './chatter-login-form.service';

describe('LoginFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatterLoginFormService]
    });
  });

  it('should be created', inject([ChatterLoginFormService], (service: ChatterLoginFormService) => {
    expect(service).toBeTruthy();
  }));
});
