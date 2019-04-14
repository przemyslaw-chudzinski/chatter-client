import { TestBed, async, inject } from '@angular/core/testing';

import { OnlyChannelAuthorGuard } from './only-channel-author.guard';

describe('OnlyChannelAuthorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlyChannelAuthorGuard]
    });
  });

  it('should ...', inject([OnlyChannelAuthorGuard], (guard: OnlyChannelAuthorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
