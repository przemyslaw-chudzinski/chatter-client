import { TestBed, inject } from '@angular/core/testing';

import { MessagesApiService } from './messages-api.service';

describe('MessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesApiService]
    });
  });

  it('should be created', inject([MessagesApiService], (service: MessagesApiService) => {
    expect(service).toBeTruthy();
  }));
});
