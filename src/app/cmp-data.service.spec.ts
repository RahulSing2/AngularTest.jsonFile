import { TestBed } from '@angular/core/testing';

import { CmpDataService } from './cmp-data.service';

describe('CmpDataService', () => {
  let service: CmpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmpDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
