import { TestBed, inject } from '@angular/core/testing';

import { NotificationsApiService } from './notifications-api.service';

describe('NotificationsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationsApiService]
    });
  });

  it('should be created', inject([NotificationsApiService], (service: NotificationsApiService) => {
    expect(service).toBeTruthy();
  }));
});
