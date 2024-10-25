import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
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
  //TODO a ameliorer pour rendre dynamuqe et a jarter d'ici   
  yearsList = ["2024","2023","2022","2021","2020","2019","2018","2017", "2016", "2015", "2014", "2013"]; 
  books$: Observable<Book[]>;


  constructor(private logger: LoggerService, private bookService : BookService){
    logger.debug(this.TAG_NAME, 'construction');    
  }

  onChooseYear(inyear:string){
    this.logger.debug(this.TAG_NAME, 'choix de lannee ' + inyear);      
    this.books$ = this.bookService.getBooksFromYear(parseInt(inyear));
  }

  selectedTabValue(event:any){
    console.log(event);
    const inyear = event.tab.textLabel;
    this.logger.debug(this.TAG_NAME, 'choix de lannee ' + inyear);      
    this.books$ = this.bookService.getBooksFromYear(parseInt(inyear));    
  }

}
