import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Book } from '../../model/book';

@Component({
  selector: 'bs-book-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  readonly book: Book;

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.book = this.activatedRoute.snapshot.data['book'];
  }
}
