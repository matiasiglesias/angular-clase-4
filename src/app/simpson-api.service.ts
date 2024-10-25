import { Injectable } from '@angular/core';
import { IFrase } from './frase.model';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SimpsonApiService {
  constructor(private http: HttpClient) {}

  fetchData(count: number): Observable<IFrase[]> {
    return this.http
      .get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`)
      .pipe(map((res: any) => res as IFrase[]));
  }
}
