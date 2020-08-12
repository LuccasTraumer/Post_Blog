import { TestBed } from '@angular/core/testing';

import { ConsumeApiService } from './consume-api.service';

describe('ConsumeApiService', () => {
  let service: ConsumeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
