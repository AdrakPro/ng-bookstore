import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { BooksService } from '../../services/books.service';

import { BookEditComponent } from './book-edit.component';

describe('BookEditComponent', () => {
  let component: BookEditComponent;
  let fixture: ComponentFixture<BookEditComponent>;
  const book = {
    id: 1,
    title: 'Test title',
    author: 'Test author',
    description: 'Test description',
    year: 2020,
  };
  const booksServiceMock = {
    updateBook: () => of(book),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookEditComponent, RouterTestingModule],
      providers: [
        { provide: BooksService, useValue: booksServiceMock },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: { book },
            },
          },
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
