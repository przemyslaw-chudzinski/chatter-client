import { TestBed, inject } from '@angular/core/testing';

import { ChatterHttpClient } from './chatter-http-client';

describe('ChatterHttpClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatterHttpClient]
    });
  });

  it('should be created', inject(
    [ChatterHttpClient],
    (service: ChatterHttpClient) => {
      expect(service).toBeTruthy();
    }
  ));
});
