import { TestBed, inject } from '@angular/core/testing';

import { ChatteruserSettingsFormService } from './chatteruser-settings-form.service';

describe('UserSettingsFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatteruserSettingsFormService]
    });
  });

  it('should be created', inject([ChatteruserSettingsFormService], (service: ChatteruserSettingsFormService) => {
    expect(service).toBeTruthy();
  }));
});
