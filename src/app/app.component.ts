import {Component, OnInit} from '@angular/core';
import {Book} from './shared/book';
import {BookService} from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'free-lib-client';

  books: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
      console.log(this.books);
    });
  }
}
