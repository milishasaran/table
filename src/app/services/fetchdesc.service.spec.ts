import { TestBed } from '@angular/core/testing';

import { FetchdescService } from './fetchdesc.service';

describe('FetchdescService', () => {
  let service: FetchdescService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchdescService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
