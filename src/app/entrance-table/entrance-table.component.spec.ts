import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranceTableComponent } from './entrance-table.component';

describe('EntranceTableComponent', () => {
  let component: EntranceTableComponent;
  let fixture: ComponentFixture<EntranceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntranceTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntranceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
