import { TestBed, inject } from '@angular/core/testing';

import { ChannelsApiService } from './channels-api.service';

describe('ChannelsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChannelsApiService]
    });
  });

  it('should be created', inject([ChannelsApiService], (service: ChannelsApiService) => {
    expect(service).toBeTruthy();
  }));
});
