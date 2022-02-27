import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forfait } from './forfait';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {
  forfaitsurl = 'http://localhost/projet-2-api/';

  constructor(private http: HttpClient) { }

  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.forfaitsurl);
  }
}