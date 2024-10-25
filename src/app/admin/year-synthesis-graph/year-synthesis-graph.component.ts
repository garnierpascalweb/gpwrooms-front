import { Component, Input, OnInit } from '@angular/core';
// https://stackoverflow.com/questions/67060070/chart-js-core-js6162-error-error-line-is-not-a-registered-controller
import Chart from 'chart.js/auto';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/book';
import { BookService } from 'src/app/shared/book.service';
import { LoggerService } from 'src/app/shared/logger.service';
import { YearSynthesisGraphService } from './year-synthesis-graph.service';

@Component({
  selector: 'app-year-synthesis-graph',
  templateUrl: './year-synthesis-graph.component.html',
  styleUrls: ['./year-synthesis-graph.component.scss']
})
export class YearSynthesisGraphComponent implements OnInit {
  readonly TAG_NAME = "YearSynthesisGraphComponent";
  @Input() year:string;
  public barChart: Chart;

  chartDatas = [
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

  constructor(private logger: LoggerService, private bookService : BookService, private yearSynthesisGraphService : YearSynthesisGraphService){
    logger.debug(this.TAG_NAME, 'construction');   
  }

  private getBooks(): Observable<Book[]>{   
    const books$ = this.bookService.getBooksFromYear(parseInt(this.year));
    return books$;
  } 
  
  ngOnInit(): void {
    this.createChart();
    this.getBooks().subscribe(
      books => {
        this.chartDatas = this.yearSynthesisGraphService.getBarChartDatas(books);
        this.updateChart();
      }
    );       
  }

  private createChart() {
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: this.chartDatas.map((row) => row.month),
        datasets: [
          {
            label: 'Revenus',
            data: this.chartDatas.map((row) => row.count),
          },
        ],
      },
    });
  }

  private updateChart(){    
    this.barChart.data = {
      labels: this.chartDatas.map((row) => row.month),
      datasets: [
        {
          label: 'Revenus',
          data: this.chartDatas.map((row) => row.count),
        },
      ],
    };
    this.barChart.update();
  }

}
