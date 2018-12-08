import { TestBed } from '@angular/core/testing';

import { ApputilsService } from './apputils.service';

describe('ApputilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApputilsService = TestBed.get(ApputilsService);
    expect(service).toBeTruthy();
  });
});
