import { TestBed } from '@angular/core/testing';

import { InstaServicesService } from './insta-services.service';

describe('InstaServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstaServicesService = TestBed.get(InstaServicesService);
    expect(service).toBeTruthy();
  });
});
