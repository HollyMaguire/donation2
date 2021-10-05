import { TestBed } from '@angular/core/testing';

import { MakeDonationService } from './make-donation.service';

describe('MakeDonationService', () => {
  let service: MakeDonationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeDonationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
