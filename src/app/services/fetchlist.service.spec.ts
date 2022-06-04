import { TestBed } from '@angular/core/testing';

import { FetchlistService } from './fetchlist.service';

describe('FetchlistService', () => {
  let service: FetchlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
