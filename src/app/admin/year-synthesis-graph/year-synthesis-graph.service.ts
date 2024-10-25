import { Injectable } from '@angular/core';
import { Book } from 'src/app/shared/book';
import { LoggerService } from 'src/app/shared/logger.service';

@Injectable({
  providedIn: 'root'
})
export class YearSynthesisGraphService {
  readonly TAG_NAME = "YearSynthesisGraphService";
  constructor(private logger: LoggerService) { }

  getBarChartDatas(books:Book[]){
    let multi: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.logger.trace(this.TAG_NAME, ' demande de datas de graph pour des books');
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
        this.logger.trace(this.TAG_NAME, ' sejour a cheval du ' + datecheckin + ' au ' + datecheckout + ' soit ' + daysInCurrentMonth + ' jours dans le mois (contient ' + daysInMonth + ' et on part du ' + date1.getDate() + ' ) sur ' + diffDays + ' sur la periode et donc un prix de ' + monthprice + ' au lieu de ' + price);
      }
      const tabindex = monthcheckin - 1;
      const newprice = multi[tabindex] + price;
      this.logger.trace(this.TAG_NAME, 'date ' + datecheckin + ' month ' + monthcheckin + ' donc index ' + tabindex + ' price ' + price + ' newprice ' + newprice);
      multi[tabindex] = newprice;
    });
    return  [
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
  }
}
