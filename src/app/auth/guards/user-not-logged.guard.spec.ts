import { TestBed, async, inject } from '@angular/core/testing';

import { UserNotLoggedGuard } from './user-not-logged.guard';

describe('UserNotLoggedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserNotLoggedGuard]
    });
  });

  it('should ...', inject([UserNotLoggedGuard], (guard: UserNotLoggedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
