import { TestBed } from '@angular/core/testing';

import { IspermissiongrantedService } from './ispermissiongranted.service';

describe('IspermissiongrantedService', () => {
  let service: IspermissiongrantedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IspermissiongrantedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
