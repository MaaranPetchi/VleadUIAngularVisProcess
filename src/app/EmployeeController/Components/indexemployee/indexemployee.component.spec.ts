import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexemployeeComponent } from './indexemployee.component';

describe('IndexemployeeComponent', () => {
  let component: IndexemployeeComponent;
  let fixture: ComponentFixture<IndexemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
