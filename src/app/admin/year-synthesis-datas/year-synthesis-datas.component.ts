import { Component, Input } from '@angular/core';
import { Book } from 'src/app/shared/book';
import { BookUtilsService } from 'src/app/shared/book-utils.service';

@Component({
  selector: 'app-year-synthesis-datas',
  templateUrl: './year-synthesis-datas.component.html',
  styleUrls: ['./year-synthesis-datas.component.scss']
})
export class YearSynthesisDatasComponent {
  readonly TAG_NAME = "YearSynthesisDatasComponent";
  @Input()
  set books(value: Book[]) {
    this.updateDatas(value);
  }  
  // le nombre de voyageurs sur la periode
  nbGuests: number;
  // le revenu cumule sur la periode
  totalPrice: number;
  // le nombre de nuits sur la periode
  totalDays: number;
  // la duree moyenne d'un sejour
  averageBookDuration: number;
  // le prix moyen d'un sejour
  averagePriceHost: number;

  constructor(private bookUtilsService : BookUtilsService){

  }
  
  updateDatas(books: Book[]){
    this.nbGuests = this.bookUtilsService.getTotalNumberOfBooks(books);
    this.totalPrice = this.bookUtilsService.getTotalPriceHost(books);
    this.totalDays = this.bookUtilsService.getTotalDays(books);
    this.averageBookDuration = this.bookUtilsService.getAverageBookDuration(books);
    this.averagePriceHost = this.bookUtilsService.getAveragePriceHost(books);
  }
  
}
