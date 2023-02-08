import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeevsdivisionindexComponent } from './employeevsdivisionindex.component';

describe('EmployeevsdivisionindexComponent', () => {
  let component: EmployeevsdivisionindexComponent;
  let fixture: ComponentFixture<EmployeevsdivisionindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeevsdivisionindexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeevsdivisionindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
