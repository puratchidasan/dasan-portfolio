import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ElementsService {

constructor(private http: HttpClient) { }

  getElements(): Observable<Element[]> {
    return this.http.get<Element[]>('http://localhost:8083/student-service/elements');
  }
}
export interface Element {
    name: string;
    weight: number;
    symbol: string;
    position: string;
  }