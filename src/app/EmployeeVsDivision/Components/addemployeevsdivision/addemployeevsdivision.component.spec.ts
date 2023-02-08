import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployeevsdivisionComponent } from './addemployeevsdivision.component';

describe('AddemployeevsdivisionComponent', () => {
  let component: AddemployeevsdivisionComponent;
  let fixture: ComponentFixture<AddemployeevsdivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddemployeevsdivisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddemployeevsdivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
