import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowCardComponent } from './flow-card.component';

describe('FlowCardComponent', () => {
  let component: FlowCardComponent;
  let fixture: ComponentFixture<FlowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
