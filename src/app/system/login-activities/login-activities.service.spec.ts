import { TestBed } from '@angular/core/testing';

import { LoginActivitiesService } from './login-activities.service';

describe('LoginActivitiesService', () => {
  let service: LoginActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
