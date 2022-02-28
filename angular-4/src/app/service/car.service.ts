import { Car } from 'src/app/model/car';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl: string = 'https://nettuts.hu/jms/chtulur/cars';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  get(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`);
  }

  update(Car: Car): Observable<Car> {
    return this.http.patch<Car>(`${this.apiUrl}/${Car.id}`, Car);
  }

  create(Car: Car): Observable<any> {
    return this.http.post<Car>(`${this.apiUrl}`, Car);
  }

  remove(id: number): Observable<any> {
    return this.http.delete<Car>(`${this.apiUrl}/${id}`);
  }
}
