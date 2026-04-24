import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
})
export class AnimalService {
  apiUri= '/api/animals'
  httpOptions = new HttpHeaders().set('Content-type', 'application/json')
  constructor(private http: HttpClient){}

  getAllAnimalData(): Observable<any>{
    return this.http.get<any>(this.apiUri)
  }
}
