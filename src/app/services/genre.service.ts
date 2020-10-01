import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KeyValuePair} from '../shared/key-value-pair';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }

  getGenres(): Observable<KeyValuePair[]> {
    return this.http.get<KeyValuePair[]>('https://localhost:5001/api/genres');
  }
}
