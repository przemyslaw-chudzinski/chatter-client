import { TestBed, inject } from '@angular/core/testing';

import { FilesApiService } from './files-api.service';

describe('FilesApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilesApiService]
    });
  });

  it('should be created', inject([FilesApiService], (service: FilesApiService) => {
    expect(service).toBeTruthy();
  }));
});
