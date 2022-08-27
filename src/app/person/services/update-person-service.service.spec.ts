import { TestBed } from '@angular/core/testing';

import { UpdatePersonServiceService } from './update-person-service.service';

describe('UpdatePersonServiceService', () => {
  let service: UpdatePersonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatePersonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
