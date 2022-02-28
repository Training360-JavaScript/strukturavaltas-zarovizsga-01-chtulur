import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Drug } from 'src/app/model/drug';
import { DrugService } from '../app/service/drug.service';

describe('DrugService', () => {
  let service: DrugService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: {
            get: () => {
              const drug = new Drug();
              drug.name = 'Paracetamol';
              return of([drug]);
            },
          }
        }
      ]
    });
    service = TestBed.inject(DrugService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll method should exist', () => {
    expect(service.getAll).toBeTruthy();
  });

  it('getAll method should return with an Observable of drugs', async () => {
    const drugs = await service.getAll().toPromise();
    expect(drugs).toBeDefined();
    expect(Array.isArray(drugs)).toBeTruthy();
    expect(drugs && drugs[0] instanceof Drug).toBeTruthy();
  });
});
