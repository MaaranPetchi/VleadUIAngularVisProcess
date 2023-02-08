import { TestBed } from '@angular/core/testing';

import { EmployeevsdivisionService } from './employeevsdivision.service';

describe('EmployeevsdivisionService', () => {
  let service: EmployeevsdivisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeevsdivisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
