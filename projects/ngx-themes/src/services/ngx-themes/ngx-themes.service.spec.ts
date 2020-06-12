import { TestBed } from '@angular/core/testing';

import { NgxThemesService } from './ngx-themes.service';

describe('NgxThemesService', () => {
  let service: NgxThemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxThemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
