import { TestBed, async, inject } from '@angular/core/testing';

import { OnlyConfirmedGuard } from './only-confirmed.guard';

describe('OnlyConfirmedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlyConfirmedGuard]
    });
  });

  it('should ...', inject([OnlyConfirmedGuard], (guard: OnlyConfirmedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
