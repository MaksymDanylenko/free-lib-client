import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Book {
  id: number
  name: string
  category: number
  genres: number[]
  formats: number[]
  info: string
  year: number
  addDate: Date
  numberOfPages: number
  contents: string
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }
}
