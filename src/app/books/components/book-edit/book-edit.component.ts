import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { Book } from '../../model/book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'bs-book-edit',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.scss'
})
export class BookEditComponent {
  readonly book: Book;
  readonly bookForm = this.formBuilder.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    year: [0, [Validators.required, Validators.min(1)]],
    description: ['', Validators.required],
  });
  isSaving = false;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly booksService: BooksService,
    private readonly router: Router,
  ) {
    this.book = this.activatedRoute.snapshot.data['book'];
    this.bookForm.setValue({
      title: this.book.title,
      author: this.book.author,
      year: this.book.year,
      description: this.book.description,
    });
  }

  save(): void {
    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const updatedBook: Book = {
      ...this.book,
      ...this.bookForm.getRawValue(),
    };

    this.booksService.updateBook(updatedBook).pipe(take(1)).subscribe({
      next: () => this.router.navigate(['/books']),
      error: () => {
        this.isSaving = false;
      },
    });
  }
}
