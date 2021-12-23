import { TestBed } from '@angular/core/testing';

import { TestfirebaseService } from './testfirebase.service';

describe('TestfirebaseService', () => {
  let service: TestfirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestfirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
