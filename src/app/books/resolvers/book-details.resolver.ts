import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { BooksService } from '../services/books.service';
import { Book } from '../model/book';

export const bookDetailsResolver: ResolveFn<Book> = (
  route: ActivatedRouteSnapshot,
) => {
  const bookId = Number(route.paramMap.get('bookId'));
  return inject(BooksService).findBookById(bookId);
};
