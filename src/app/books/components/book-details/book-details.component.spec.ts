import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { BookDetailsComponent } from './book-details.component';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  const book = {
    id: 1,
    title: 'Test title',
    author: 'Test author',
    description: 'Test description',
    year: 2020,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDetailsComponent, RouterTestingModule],
      providers: [
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

    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
