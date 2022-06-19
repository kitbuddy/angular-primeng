import { TestBed } from '@angular/core/testing';

import { GetTestJsonService } from './get-test-json.service';

describe('GetTestJsonService', () => {
  let service: GetTestJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTestJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
