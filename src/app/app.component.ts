import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './componentes/book-list/book-list.component';
import { BookCollectionComponent } from './componentes/book-collection/book-collection.component';
import { Store } from '@ngrx/store';
import { GoogleBooksService } from './book-list/books.service';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { selectBooks, selectBookCollection } from './state/books.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BookListComponent,
    BookCollectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'loja-livros-ngrx';
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

}
