import { Routes } from '@angular/router';
import { BookListComponent } from './books/components/book-list/book-list.component';
import { BookDetailsComponent } from './books/components/book-details/book-details.component';
import { BookEditComponent } from './books/components/book-edit/book-edit.component';
import { bookListResolver } from './books/resolvers/book-list.resolver';
import { bookDetailsResolver } from './books/resolvers/book-details.resolver';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/books'
  },
  {
    path: 'books',
    component: BookListComponent,
    resolve: {
      books: bookListResolver
    }
  },
  {
    path: 'books/:bookId/reviews',
    component: BookDetailsComponent,
    resolve: {
      book: bookDetailsResolver
    }
  },
  {
    path: 'books/:bookId/edit',
    component: BookEditComponent,
    resolve: {
      book: bookDetailsResolver
    }
  }
];
