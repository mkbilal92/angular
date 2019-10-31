import { TestBed } from '@angular/core/testing';

import { FirstServService } from './first-serv.service';

describe('FirstServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirstServService = TestBed.get(FirstServService);
    expect(service).toBeTruthy();
  });
});
