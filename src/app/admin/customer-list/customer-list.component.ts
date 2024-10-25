import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder  } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { GroupedObservable, Observable, combineLatest, from, groupBy, map, mergeMap, of, pluck, reduce, startWith, switchMap, toArray } from 'rxjs';
import { Book } from 'src/app/shared/book';
import { BookService } from 'src/app/shared/book.service';
import { LoggerService } from 'src/app/shared/logger.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  
  readonly TAG_NAME = "CustomerListComponent";
  @Input() year:string;
  displayedColumns: string[] = ['name', 'datecheckin', 'datecheckout', 'price'];
  books$: Observable<Book[]>;
  booksTabDataSource = new MatTableDataSource();
  


  constructor(private logger: LoggerService, private bookService : BookService){
    logger.debug(this.TAG_NAME, 'construction');    
  }
  ngOnInit(): void {
    this.books$ = this.getBooks();
    this.books$.subscribe(data => {
      this.booksTabDataSource.data = data;     
  });
  }

  private getBooks(): Observable<Book[]>{   
    const books$ = this.bookService.getBooksFromYear(parseInt(this.year));
    return books$;
  }  
}
