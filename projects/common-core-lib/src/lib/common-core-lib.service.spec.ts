import { TestBed, inject } from '@angular/core/testing';

import { CommonCoreLibService } from './common-core-lib.service';

describe('CommonCoreLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonCoreLibService]
    });
  });

  it('should be created', inject([CommonCoreLibService], (service: CommonCoreLibService) => {
    expect(service).toBeTruthy();
  }));
});
