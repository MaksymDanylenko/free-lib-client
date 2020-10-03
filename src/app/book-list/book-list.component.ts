import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book.service';
import {Book} from '../shared/book';
import {GenreService} from '../services/genre.service';
import {AuthorService} from '../services/author.service';
import {KeyValuePair} from '../shared/key-value-pair';
import {Author} from '../shared/author';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  genres: KeyValuePair[];
  authors: Author[];
  minYear: number;
  maxYear: number;

  selectedCategories: number[] = [];
  selectedGenres: number[] = [];
  selectedAuthors: number[] = [];
  yearRange: number[] = [];

  constructor(private bookService: BookService,
              private genreService: GenreService,
              private authorService: AuthorService) { }

  ngOnInit(): void {
    this.bookService.getBooks('').subscribe(books => {
      this.books = books;
    });
    this.authorService.getAuthors().subscribe(authors => {
      this.authors = authors;
    });
    this.genreService.getGenres().subscribe(genres => {
      this.genres = genres;
    });
    this.minYear = 1000;
    this.maxYear = 2020;
    this.yearRange = [1000, 2020];
  }

  addGenre(id: number): void {
    if (this.selectedGenres.includes(id)) {
      this.selectedGenres.splice(this.selectedGenres.indexOf(id), 1);
    } else {
      this.selectedGenres.push(id);
    }
    this.fetchBooks();
  }

  addAuthor(id: number): void {
    if (this.selectedAuthors.includes(id)) {
      this.selectedAuthors.splice(this.selectedAuthors.indexOf(id), 1);
    } else {
      this.selectedAuthors.push(id);
    }
    this.fetchBooks();
  }

  addCategory(id: number): void {
    if (this.selectedCategories.includes(id)) {
      this.selectedCategories.splice(this.selectedCategories.indexOf(id), 1);
    } else {
      this.selectedCategories.push(id);
    }
    this.fetchBooks();
  }

  fetchBooks(): void {
    let parameters = '?';
    for (const author of this.selectedAuthors) {
      parameters = parameters + 'authors=' + author + '&';
    }
    for (const genre of this.selectedGenres) {
      parameters = parameters + 'genres=' + genre + '&';
    }
    this.bookService.getBooks(parameters).subscribe(books => {
      this.books = books;
    });
  }
}
