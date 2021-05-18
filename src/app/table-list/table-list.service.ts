import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders  } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ElementsService {

constructor(private http: HttpClient) { }

  getElements(): Observable<Element[]> {
    //return this.http.get<Element[]>('https://student-services.azurewebsites.net/elements',{'headers': headers });
    return this.http.get<Element[]>('http://localhost:8083/student-service/elements');
    //return this.http.get<Element[]>('http://140.238.89.162:8080/student-jpa');
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('http://140.238.89.162:8088/student-jpa');
  }
}
export interface Element {
    name: string;
    weight: number;
    symbol: string;
    position: string;
  }

  export interface Student {
    id:        number;
    rollNo:    number;
    firstName: string;
    lastName:  string;
    marks:     number;
}