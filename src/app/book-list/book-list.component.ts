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

  selectedCategories: number[] = [];
  selectedGenres: number[] = [];
  selectedAuthors: number[] = [];

  constructor(private bookService: BookService,
              private genreService: GenreService,
              private authorService: AuthorService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
    this.authorService.getAuthors().subscribe(authors => {
      this.authors = authors;
    });
    this.genreService.getGenres().subscribe(genres => {
      this.genres = genres;
    });
  }

  addGenre(id: number): void {
    if (this.selectedGenres.includes(id)) {
      this.selectedGenres.splice(this.selectedGenres.indexOf(id), 1);
    } else {
      this.selectedGenres.push(id);
    }
    console.log('Genres:', this.selectedGenres);
  }

  addAuthor(id: number): void {
    if (this.selectedAuthors.includes(id)) {
      this.selectedAuthors.splice(this.selectedAuthors.indexOf(id), 1);
    } else {
      this.selectedAuthors.push(id);
    }
    console.log('Authors:', this.selectedAuthors);
  }

  addCategory(id: number): void {
    if (this.selectedCategories.includes(id)) {
      this.selectedCategories.splice(this.selectedCategories.indexOf(id), 1);
    } else {
      this.selectedCategories.push(id);
    }
    console.log('Categories:', this.selectedCategories);
  }
}
