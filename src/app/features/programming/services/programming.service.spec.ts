import { TestBed } from '@angular/core/testing';

import { ProgrammingService } from './programming.service';

describe('ProgrammingService', () => {
  let service: ProgrammingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgrammingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
