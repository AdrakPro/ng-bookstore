import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RedirectCommand, ResolveFn, Router } from '@angular/router';
import { BooksService } from '../services/books.service';
import { Book } from '../model/book';

export const bookDetailsResolver: ResolveFn<Book> = (
  route: ActivatedRouteSnapshot,
) => {
  const bookIdParam = route.paramMap.get('bookId');
  const bookId = Number(bookIdParam);

  if (!bookIdParam || Number.isNaN(bookId)) {
    return new RedirectCommand(inject(Router).createUrlTree(['/books']));
  }

  return inject(BooksService).findBookById(bookId);
};
