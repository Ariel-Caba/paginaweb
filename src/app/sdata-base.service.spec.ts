import { TestBed } from '@angular/core/testing';

import { SdataBaseService } from './sdata-base.service';

describe('SdataBaseService', () => {
  let service: SdataBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdataBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
