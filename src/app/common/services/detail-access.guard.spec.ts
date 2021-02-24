import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionStore } from '../state-manager/state.store';

import { DetailAccessGuardGuard } from './detail-access.guard';

describe('DetailAccessGuardGuard', () => {
  let guard: DetailAccessGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule]});
    guard = TestBed.inject(DetailAccessGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
