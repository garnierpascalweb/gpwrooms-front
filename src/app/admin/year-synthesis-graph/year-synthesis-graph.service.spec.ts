import { TestBed } from '@angular/core/testing';

import { YearSynthesisGraphService } from './year-synthesis-graph.service';

describe('YearSynthesisGraphService', () => {
  let service: YearSynthesisGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearSynthesisGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
