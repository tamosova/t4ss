import { TestBed } from '@angular/core/testing';

import { PhotoFileService } from './photo-file.service';

describe('PhotoFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoFileService = TestBed.get(PhotoFileService);
    expect(service).toBeTruthy();
  });
});
