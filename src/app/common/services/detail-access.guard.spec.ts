import { TestBed } from '@angular/core/testing';

import { DetailAccessGuardGuard } from './detail-access.guard';

describe('DetailAccessGuardGuard', () => {
  let guard: DetailAccessGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DetailAccessGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
