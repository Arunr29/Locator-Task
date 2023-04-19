import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityTableComponent } from './eligibility-table.component';

describe('EligibilityTableComponent', () => {
  let component: EligibilityTableComponent;
  let fixture: ComponentFixture<EligibilityTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibilityTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibilityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
