import { Component, Input } from '@angular/core';
import { FormBuilder  } from '@angular/forms';
import { GroupedObservable, Observable, combineLatest, from, groupBy, map, mergeMap, of, pluck, reduce, startWith, switchMap, toArray } from 'rxjs';
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
  @Input() year:number;
  

  books$: Observable<Book[]> = this.getBooks(); 
  booksByMonths$ = this.booksByMonths();


  constructor(private formBuilder: FormBuilder, private logger: LoggerService, private bookService : BookService){
    logger.debug(this.TAG_NAME, 'construction');    
  }

  private getBooks(): Observable<Book[]>{   
    const books$ = this.bookService.getBooksFromYear(this.year);
    return books$;
  }  



  private booksByMonths() {
    const books$: Observable<Book[]> = this.getBooks();   
    return books$.pipe(
      map((books) => {
        console.log('arrivage de ' + books.length + ' book');
        let multi: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        books.map((book) => {
          const datecheckin = book.datecheckin;
          const datecheckout = book.datecheckout;
          const price = parseFloat(book.pricehost);
          let monthprice = 0;
          const monthcheckin = parseInt(datecheckin.substring(5, 7));
          const monthcheckout = parseInt(datecheckout.substring(5, 7));
          if (monthcheckin === monthcheckout){
            monthprice = price;
          } else {
            const date1: Date = new Date(datecheckin);  
            const date2: Date = new Date(datecheckout);
            const diff = Math.abs(date2.getTime() - date1.getTime());
            const diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
            const pricePerDay = price/diffDays;
            const daysInMonth = new Date(date1.getFullYear(), date1.getMonth()-1, 0).getDate();
            const daysInCurrentMonth = daysInMonth - date1.getDate();
            monthprice = pricePerDay * daysInCurrentMonth;
            console.log(' sejour a cheval du ' + datecheckin + ' au ' + datecheckout + ' soit ' + daysInCurrentMonth + ' jours dans le mois (contient ' + daysInMonth + ' et on part du ' + date1.getDate() + ' ) sur ' + diffDays + ' sur la periode et donc un prix de ' + monthprice + ' au lieu de ' + price);
          }
          const tabindex = monthcheckin - 1;
          const newprice = multi[tabindex] + price;
          console.log('date ' + datecheckin + ' month ' + monthcheckin + ' donc index ' + tabindex + ' price ' + price + ' newprice ' + newprice);
          multi[tabindex] = newprice;
        })
        console.log('renvoi dun tableau de ' + multi.length);
        
        
        return [
          { month: 'Janvier', count: multi[0] },
          { month: 'Fevrier', count: multi[1] },
          { month: 'Mars', count: multi[2] },
          { month: 'Avril', count: multi[3] },
          { month: 'Mai', count: multi[4] },
          { month: 'Juin', count: multi[5] },
          { month: 'Juillet', count: multi[6] },
          { month: 'Aout', count: multi[7] },
          { month: 'Septembre', count: multi[8] },
          { month: 'Octobre', count: multi[9] },
          { month: 'Novembre', count: multi[10] },
          { month: 'Decembre', count: multi[11] }
        ];
        //return multi;
      })
    );
  }
}
