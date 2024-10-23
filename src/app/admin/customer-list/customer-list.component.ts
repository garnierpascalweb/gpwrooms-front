import { Component } from '@angular/core';
import { FormBuilder  } from '@angular/forms';
import { Observable, combineLatest, map, startWith } from 'rxjs';
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
  
  searchForm = this.formBuilder.group({
    name:[''],
    pricehost:['']
  });

  // books$: Observable<Book[]> = this.bookService.getBooksFromYear(2010);
  books$: Observable<Book[]> = this.getBooks();

  constructor(private formBuilder: FormBuilder, private logger: LoggerService, private bookService : BookService){
    logger.debug(this.TAG_NAME, 'construction');
    //this.books$ = this.bookService
  }

  private getBooks(): Observable<Book[]>{
    const books$ = this.bookService.getBooksFromYear(2010);
    // debute avec une chaine vide sinon il affiche rien d'emblée (la on dit que la recherche est vide)
    const searchedName$ = this.searchForm.controls.name.valueChanges.pipe(startWith(''));
    const searchedMinPrice$ = this.searchForm.controls.pricehost.valueChanges.pipe(startWith(''));

    const search$ = combineLatest([
      searchedName$,
      searchedMinPrice$
    ]);
    
    return combineLatest([books$,search$])
    .pipe(
      // pour des reservations (books) et un nom recherché (searchedname), filtre la liste des books pour me donner que ceux ou le name ressemble a searchedname
      map(([books,[searchedname, searchedMinPrice]]) => books.filter(book => {
        const isNameMatching = book.name.toLowerCase().includes(searchedname.toLowerCase())
        const isPriceMatching = book.pricehost > searchedMinPrice;
        return isNameMatching && isPriceMatching;
      }))
    )
  }

}
