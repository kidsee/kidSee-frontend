import { TestBed, inject } from '@angular/core/testing';

import { UserSerivceService } from './user-serivce.service';

describe('UserSerivceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSerivceService]
    });
  });

  it('should be created', inject([UserSerivceService], (service: UserSerivceService) => {
    expect(service).toBeTruthy();
  }));
});