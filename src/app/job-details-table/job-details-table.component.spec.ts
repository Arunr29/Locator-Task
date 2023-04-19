import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsTableComponent } from './job-details-table.component';

describe('JobDetailsTableComponent', () => {
  let component: JobDetailsTableComponent;
  let fixture: ComponentFixture<JobDetailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDetailsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
