import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthorPageComponent } from './author-page/author-page.component';
import { BookPageComponent } from './book-page/book-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookFormComponent } from './book-form/book-form.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import {BooksListPageComponent} from './books-list-page/books-list-page.component';
import {AuthorsListPageComponent} from './authors-list-page/authors-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AuthorPageComponent,
    BookPageComponent,
    BookFormComponent,
    AuthorFormComponent,
    BooksListPageComponent,
    AuthorsListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
