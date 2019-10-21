import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDateHoursComponent } from './add-date-hours.component';

describe('AddDateHoursComponent', () => {
  let component: AddDateHoursComponent;
  let fixture: ComponentFixture<AddDateHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDateHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDateHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
