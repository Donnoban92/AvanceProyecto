import { TestBed } from '@angular/core/testing';

import { DeejayServiceService } from './deejay-service.service';

describe('DeejayServiceService', () => {
  let service: DeejayServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeejayServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
