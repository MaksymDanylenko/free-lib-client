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

  constructor(private bookService: BookService,
              private genreService: GenreService,
              private authorService: AuthorService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
      // console.log(this.books);
    });
    this.authorService.getAuthors().subscribe(authors => {
      this.authors = authors;
      // console.log(this.authors);
    });
    this.genreService.getGenres().subscribe(genres => {
      this.genres = genres;
      // console.log(this.genres);
    });
  }

}
