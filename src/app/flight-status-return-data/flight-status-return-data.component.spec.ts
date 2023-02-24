import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightStatusReturnDataComponent } from './flight-status-return-data.component';

describe('FlightStatusReturnDataComponent', () => {
  let component: FlightStatusReturnDataComponent;
  let fixture: ComponentFixture<FlightStatusReturnDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightStatusReturnDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightStatusReturnDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
