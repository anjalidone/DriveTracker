import { TestBed } from '@angular/core/testing';

import { D2serviceService } from './d2service.service';

describe('D2serviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: D2serviceService = TestBed.get(D2serviceService);
    expect(service).toBeTruthy();
  });
});
