import { TestBed } from '@angular/core/testing';

import { NavExtrasServiceService } from './nav-extras-service.service';

describe('NavExtrasServiceService', () => {
  let service: NavExtrasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavExtrasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
