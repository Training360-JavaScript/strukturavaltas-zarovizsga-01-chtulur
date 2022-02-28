import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ConstructionService } from '../app/service/construction.service';

describe('ConstructionService', () => {
  let service: ConstructionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(ConstructionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('methods should exist', () => {
    expect( typeof service.getAll !== 'undefined' ).toBeTruthy();
    expect( typeof service.create !== 'undefined' ).toBeTruthy();
    expect( typeof service.get !== 'undefined' ).toBeTruthy();
    expect( typeof service.update !== 'undefined' ).toBeTruthy();
    expect( typeof service.delete !== 'undefined' ).toBeTruthy();
  });

  it('types of methods should be correct', () => {
    expect(service.getAll instanceof Function).toBeTruthy();
    expect(service.create instanceof Function).toBeTruthy();
    expect(service.get instanceof Function).toBeTruthy();
    expect(service.update instanceof Function).toBeTruthy();
    expect(service.delete instanceof Function).toBeTruthy();
  });
});
