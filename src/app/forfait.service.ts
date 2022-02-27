import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forfait } from './forfait';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {
  forfaitsUrl = 'http://localhost/projet-2-api/';

  constructor(private http: HttpClient) { }

  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.forfaitsUrl);
  }

  addForfait(forfait: Forfait): Observable<Forfait[]> {
    return this.http.post<Forfait[]>(this.forfaitsUrl, forfait, httpOptions);
  }
}