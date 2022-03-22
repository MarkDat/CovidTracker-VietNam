import { TestBed } from '@angular/core/testing';

import { CaseDetailsService } from './case-details.service';

describe('CaseDetailsService', () => {
  let service: CaseDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
