import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobEntranceTableComponent } from './job-entrance-table.component';

describe('JobEntranceTableComponent', () => {
  let component: JobEntranceTableComponent;
  let fixture: ComponentFixture<JobEntranceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobEntranceTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobEntranceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
