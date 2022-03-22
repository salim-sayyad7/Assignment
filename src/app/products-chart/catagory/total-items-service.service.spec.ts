import { TestBed } from '@angular/core/testing';

import { TotalItemsServiceService } from './total-items-service.service';

describe('TotalItemsServiceService', () => {
  let service: TotalItemsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalItemsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
