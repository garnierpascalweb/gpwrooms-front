import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/book';
import { BookService } from 'src/app/shared/book.service';
import { LoggerService } from 'src/app/shared/logger.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {
  readonly TAG_NAME = "CustomerListComponent";
  books$: Observable<Book[]> = this.bookService.getBooksFromYear(2010); 

  constructor(private logger: LoggerService, private bookService : BookService){
    logger.debug(this.TAG_NAME, 'construction');
    //this.books$ = this.bookService
  }
}
