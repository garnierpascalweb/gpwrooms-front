import { Injectable } from '@angular/core';
import { Book } from './book';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
/**
 * Service utilitaire pour les books
 */
export class BookUtilsService {
  readonly TAG_NAME = "BookUtilsService";
  constructor(private logger: LoggerService) { }
  /**
   * Le nombre total de voyageurs sur la periode
   * @param books 
   * @returns 
   */
  getTotalNumberOfBooks(books: Book[]) {
    return books.length;
  }
  /**
   * Le cumul de revenus sur la periode
   * @param books 
   * @returns le prix total
   */
  getTotalPriceHost(books: Book[]) {
    return (Number)(books.reduce((sum, book) => sum + parseFloat(book.pricehost), 0).toFixed(2));
  }

  /**
   * Le nombre de jours reservés sur la période
   * @param books 
   * @returns 
   */
  getTotalDays(books: Book[]) {
    return books.reduce((sum, book) => sum + this.getBookDuration(book), 0);
  }

  /**
   * 
   * @param books 
   * @returns la duree moyenne de sejours
   */
  getAverageBookDuration(books : Book[]){
   return (Number)((this.getTotalDays(books) / this.getTotalNumberOfBooks(books)).toFixed(2));
  }

  /**
   * 
   * @param books 
   * @returns le prix moyen de sejours
   */
  getAveragePriceHost(books: Book[]) {
    return (Number)((this.getTotalPriceHost(books) / this.getTotalDays(books)).toFixed(2));    
  }

  /**
* 
* @param datecheckin date d'entrée
* @param datecheckout date de sortie
* @returns la duree d'un sejour
*/
  getBookDuration(book: Book) {
    const date1: Date = new Date(book.datecheckin);
    const date2: Date = new Date(book.datecheckout);
    const diff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    return diffDays;
  }  

  /**
   * 
   * @param book 
   * @returns le prix pour le mois courant, le cas echéant au prorata si le sejour est a cheval sur deux mois
   */
  getPriceHostForCheckInMonth(book: Book) {
    const datecheckin: Date = new Date(book.datecheckin);
    const datecheckout: Date = new Date(book.datecheckout);
    const price = parseFloat(book.pricehost);
    let monthprice = 0;
    const monthcheckin = datecheckin.getMonth() + 1;
    const monthcheckout = datecheckout.getMonth() + 1;
    if (monthcheckin === monthcheckout) {
      monthprice = price;
    } else {
      const diff = Math.abs(datecheckout.getTime() - datecheckin.getTime());
      const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
      const pricePerDay = price / diffDays;
      const daysInMonth = new Date(datecheckin.getFullYear(), datecheckin.getMonth() - 1, 0).getDate();
      const daysInCurrentMonth = daysInMonth - datecheckin.getDate();
      monthprice = pricePerDay * daysInCurrentMonth;
      this.logger.trace(this.TAG_NAME, ' sejour a cheval du ' + datecheckin + ' au ' + datecheckout + ' soit ' + daysInCurrentMonth + ' jours dans le mois (contient ' + daysInMonth + ' et on part du ' + datecheckin.getDate() + ' ) sur ' + diffDays + ' sur la periode et donc un prix de ' + monthprice + ' au lieu de ' + price);
    }
    return monthprice;
  }
}
