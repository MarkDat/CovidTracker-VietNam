import { TestBed } from '@angular/core/testing';

import { CovidCaseService } from './covid-case.service';

describe('CovidCaseService', () => {
  let service: CovidCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
