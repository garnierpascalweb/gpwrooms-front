import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private http = inject(HttpClient);
  readonly url = 'https://garnierpascalweb.fr/gpwrooms/api/bookapi.php?year=2023';

  constructor() {

  }

  getBooks(){

  }

  /**
   * Reservations pour une année
   * @param inyear l'annee
   */
  getBooksFromYear(inyear: number): Observable<Book[]>{
    return this.http.get<Book[]>(this.url);
  }

  /**
   * Reservations pour un mois
   * @param inyear L'année et le mois
   * @param inmonth 
   */
  getBooksFromMonth(inyear: number, inmonth: number){

  }
}
