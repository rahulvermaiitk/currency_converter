import { TestBed } from '@angular/core/testing';

import { ExchangeserviceService } from "./ExchangeserviceService";

describe('ExchangeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExchangeserviceService = TestBed.get(ExchangeserviceService);
    expect(service).toBeTruthy();
  });
});
