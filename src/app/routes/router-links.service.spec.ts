import { TestBed, inject } from '@angular/core/testing';

import { RouterLinksService } from './router-links.service';

describe('RouterLinksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterLinksService]
    });
  });

  it('should be created', inject([RouterLinksService], (service: RouterLinksService) => {
    expect(service).toBeTruthy();
  }));
});
