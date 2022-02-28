import { Construction } from 'src/app/model/construction';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConstructionService {
  apiUrl: string = 'https://nettuts.hu/jms/chtulur/constructions';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Construction[]> {
    return this.http.get<Construction[]>(`${this.apiUrl}`);
  }
  get(id: number): Observable<Construction> {
    return this.http.get<Construction>(`${this.apiUrl}/${id}`);
  }

  update(Construction: Construction): Observable<Construction> {
    return this.http.patch<Construction>(
      `${this.apiUrl}/${Construction.id}`,
      Construction
    );
  }

  create(Construction: Construction): Observable<any> {
    return this.http.post<Construction>(`${this.apiUrl}`, Construction);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<Construction>(`${this.apiUrl}/${id}`);
  }
}
