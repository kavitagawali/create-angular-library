import { TestBed } from '@angular/core/testing';

import { CardLibService } from './card-lib.service';

describe('CardLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardLibService = TestBed.get(CardLibService);
    expect(service).toBeTruthy();
  });
});
