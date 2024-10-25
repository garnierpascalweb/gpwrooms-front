import { Injectable } from '@angular/core';
import { Book } from 'src/app/shared/book';
import { BookUtilsService } from 'src/app/shared/book-utils.service';
import { LoggerService } from 'src/app/shared/logger.service';

@Injectable({
  providedIn: 'root'
})
export class YearSynthesisGraphService {
  readonly TAG_NAME = "YearSynthesisGraphService";
  constructor(private logger: LoggerService, private bookUtilsService: BookUtilsService) { }

  /**
   * Renvoi les donnees annuelles du Chart pour une liste de reservations
   * @param books la liste des reservations
   * @returns les datas pour un barChart
   */
  getBarChartDatas(books: Book[]) {
    if (books) {
      let pricesByMonth: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.logger.trace(this.TAG_NAME, ' demande de datas de graph pour des books');
      books.map((book) => {
        const monthprice = this.bookUtilsService.getPriceHostForCheckInMonth(book);
        const tabindex = new Date(book.datecheckin).getMonth();
        const newprice = pricesByMonth[tabindex] + monthprice;
        this.logger.trace(this.TAG_NAME, 'date ' + book.datecheckin + ' donc index ' + tabindex + ' price ' + monthprice + ' newprice ' + newprice);
        pricesByMonth[tabindex] = newprice;
      });
      return [
        { month: 'Janvier', count: pricesByMonth[0] },
        { month: 'Fevrier', count: pricesByMonth[1] },
        { month: 'Mars', count: pricesByMonth[2] },
        { month: 'Avril', count: pricesByMonth[3] },
        { month: 'Mai', count: pricesByMonth[4] },
        { month: 'Juin', count: pricesByMonth[5] },
        { month: 'Juillet', count: pricesByMonth[6] },
        { month: 'Aout', count: pricesByMonth[7] },
        { month: 'Septembre', count: pricesByMonth[8] },
        { month: 'Octobre', count: pricesByMonth[9] },
        { month: 'Novembre', count: pricesByMonth[10] },
        { month: 'Decembre', count: pricesByMonth[11] }
      ];
    } else return [];
  }
  //TODO a deplacer dans bookService

  /**
   * 
   * @returns les donnees initiales
   */
  getInitialBarChartDatas() {
    return [
      { month: 'Janvier', count: 0 },
      { month: 'Fevrier', count: 0 },
      { month: 'Mars', count: 0 },
      { month: 'Avril', count: 0 },
      { month: 'Mai', count: 0 },
      { month: 'Juin', count: 0 },
      { month: 'Juillet', count: 0 },
      { month: 'Aout', count: 0 },
      { month: 'Septembre', count: 0 },
      { month: 'Octobre', count: 0 },
      { month: 'Novembre', count: 0 },
      { month: 'Decembre', count: 0 }
    ];
  }
}
