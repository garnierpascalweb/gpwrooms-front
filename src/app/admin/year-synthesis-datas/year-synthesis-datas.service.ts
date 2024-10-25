import { Injectable } from '@angular/core';
import { Book } from 'src/app/shared/book';
import { BookUtilsService } from 'src/app/shared/book-utils.service';
import { LoggerService } from 'src/app/shared/logger.service';

@Injectable({
  providedIn: 'root'
})
export class YearSynthesisDatasService {

  constructor(private logger: LoggerService, private bookUtilsService : BookUtilsService) { }

  

  


}
