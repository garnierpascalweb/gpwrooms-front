import { Component, Input, OnInit } from '@angular/core';
// https://stackoverflow.com/questions/67060070/chart-js-core-js6162-error-error-line-is-not-a-registered-controller
import Chart from 'chart.js/auto';
import { BookService } from 'src/app/shared/book.service';
import { LoggerService } from 'src/app/shared/logger.service';

@Component({
  selector: 'app-year-synthesis-graph',
  templateUrl: './year-synthesis-graph.component.html',
  styleUrls: ['./year-synthesis-graph.component.scss']
})
export class YearSynthesisGraphComponent implements OnInit {
  readonly TAG_NAME = "YearSynthesisGraphComponent";
  @Input() year:number;
  public barChart: any;

  data = [
    { month: 'Janvier', count: 19 },
    { month: 'Fevrier', count: 20 },
    { month: 'Mars', count: 15 },
    { month: 'Avril', count: 25 },
    { month: 'Mai', count: 22 },
    { month: 'Juin', count: 30 },
    { month: 'Juillet', count: 22 },
    { month: 'Aout', count: 17 },
    { month: 'Septembre', count: 23 },
    { month: 'Octobre', count: 41 },
    { month: 'Novembre', count: 10 },
    { month: 'Decembre', count: 16 }
  ];

  constructor(private logger: LoggerService, private bookService : BookService){
    logger.debug(this.TAG_NAME, 'construction');
    //this.books$ = this.bookService
  }
  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: this.data.map((row) => row.month),
        datasets: [
          {
            label: 'Revenus',
            data: this.data.map((row) => row.count),
          },
        ],
      },
    });
  }

}
