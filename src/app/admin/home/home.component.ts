import { Component } from '@angular/core';
import { LoggerService } from 'src/app/shared/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly TAG_NAME = "HomeComponent";

  constructor(private logger: LoggerService){
    logger.debug(this.TAG_NAME, 'construction');
  }
}
