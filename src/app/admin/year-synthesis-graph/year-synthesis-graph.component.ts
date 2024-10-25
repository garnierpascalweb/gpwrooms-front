import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  @Input()
  set books(value: Book[]) {
    this.updateChart(value);
  }   

  public barChart: Chart;

  constructor(private logger: LoggerService, private bookService : BookService, private yearSynthesisGraphService : YearSynthesisGraphService){
    logger.debug(this.TAG_NAME, 'construction');   
  }
  
  ngOnInit(): void {
    this.createChart();               
  }

  /**
   * Creation du Chart
   */
  private createChart() {
    const chartDatas = this.yearSynthesisGraphService.getInitialBarChartDatas();
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: chartDatas.map((row) => row.month),
        datasets: [
          {
            label: 'Revenus',
            data: chartDatas.map((row) => row.count),
          },
        ],
      },
    });
  }

  /**
   * Mise a Jour du Chart
   */
  private updateChart(books:Book[]){    
    if (books){
    const chartDatas = this.yearSynthesisGraphService.getBarChartDatas(books);
    this.barChart.data = {
      labels: chartDatas.map((row) => row.month),
      datasets: [
        {
          label: 'Revenus',
          data: chartDatas.map((row) => row.count),
        },
      ],
    };
    this.barChart.update();
  }
  }

}


