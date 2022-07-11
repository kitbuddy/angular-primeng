import { TestBed } from '@angular/core/testing';

import { BehaviourSubjectSerService } from './behaviour-subject-ser.service';

describe('BehaviourSubjectSerService', () => {
  let service: BehaviourSubjectSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviourSubjectSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
