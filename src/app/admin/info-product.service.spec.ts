import { TestBed } from '@angular/core/testing';

import { InfoProductService } from './info-product.service';

describe('InfoProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoProductService = TestBed.get(InfoProductService);
    expect(service).toBeTruthy();
  });
});
