import { TestBed } from '@angular/core/testing';

import { BookUtilsService } from './book-utils.service';

describe('BookUtilsService', () => {
  let service: BookUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
