import { TestBed } from '@angular/core/testing';

import { YearSynthesisDatasService } from './year-synthesis-datas.service';

describe('YearSynthesisDatasService', () => {
  let service: YearSynthesisDatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearSynthesisDatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
