import { TestBed } from '@angular/core/testing';

import { NeiroNetService } from './neiro-net.service';

describe('NeiroNetService', () => {
  let service: NeiroNetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeiroNetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
