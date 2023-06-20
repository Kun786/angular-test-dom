import { TestBed } from '@angular/core/testing';

import { GptDetectorServiceService } from './gpt-detector-service.service';

describe('GptDetectorServiceService', () => {
  let service: GptDetectorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GptDetectorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
