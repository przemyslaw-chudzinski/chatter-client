import { TestBed, inject } from '@angular/core/testing';

import { UserSettingsFormService } from './user-settings-form.service';

describe('UserSettingsFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSettingsFormService]
    });
  });

  it('should be created', inject([UserSettingsFormService], (service: UserSettingsFormService) => {
    expect(service).toBeTruthy();
  }));
});
