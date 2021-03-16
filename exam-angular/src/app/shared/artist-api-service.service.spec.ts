import { TestBed } from '@angular/core/testing';

import { ArtistApiServiceService } from './artist-api-service.service';

describe('ArtistApiServiceService', () => {
  let service: ArtistApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
