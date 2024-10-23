import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/book';
import { BookService } from 'src/app/shared/book.service';
import { LoggerService } from 'src/app/shared/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly TAG_NAME = "HomeComponent";
  books$: Observable<Book[]> = this.bookService.getBooksFromYear(2010); 

  constructor(private logger: LoggerService, private bookService : BookService){
    logger.debug(this.TAG_NAME, 'construction');
    //this.books$ = this.bookService
  }


}
