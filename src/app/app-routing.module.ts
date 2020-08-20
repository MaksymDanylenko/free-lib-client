import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {BooksListPageComponent} from './books-list-page/books-list-page.component';
import {AuthorsListPageComponent} from './authors-list-page/authors-list-page.component';
import {BookFormComponent} from './book-form/book-form.component';
import {AuthorFormComponent} from './author-form/author-form.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'}, // ->HomePageComponent
  {path: 'books', component: BooksListPageComponent}, // /books -> BooksListPageComponent
  {path: 'authors', component: AuthorsListPageComponent}, // /authors -> AuthorsListPageComponent
  {path: 'books/form', component: BookFormComponent}, // /books/form -> BookFormComponent
  {path: 'authors/form', component: AuthorFormComponent}, // /authors -> AuthorFormComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
