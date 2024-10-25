import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearSynthesisDatasComponent } from './year-synthesis-datas.component';

describe('YearSynthesisDatasComponent', () => {
  let component: YearSynthesisDatasComponent;
  let fixture: ComponentFixture<YearSynthesisDatasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearSynthesisDatasComponent]
    });
    fixture = TestBed.createComponent(YearSynthesisDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
