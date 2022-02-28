import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drug } from '../model/drug';

@Injectable({
  providedIn: 'root',
})
export class DrugService {
  apiUrl: string = 'https://nettuts.hu/jms/chtulur/drugs';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Drug[]> {
    return this.http.get<Drug[]>(this.apiUrl);
  }
}
