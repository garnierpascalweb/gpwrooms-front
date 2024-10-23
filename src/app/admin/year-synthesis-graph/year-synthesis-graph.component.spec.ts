import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearSynthesisGraphComponent } from './year-synthesis-graph.component';

describe('YearSynthesisGraphComponent', () => {
  let component: YearSynthesisGraphComponent;
  let fixture: ComponentFixture<YearSynthesisGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearSynthesisGraphComponent]
    });
    fixture = TestBed.createComponent(YearSynthesisGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
