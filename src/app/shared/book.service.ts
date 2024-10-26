import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private http = inject(HttpClient);
  readonly url = 'nosilverbullet!';

  constructor() {

  }

  getBooks(){
    return this.http.get<Book[]>(this.url);
  }

  /**
   * Reservations pour une année
   * @param inyear l'annee
   */
  getBooksFromYear(inyear: number): Observable<Book[]>{
    let params = new HttpParams();    
    params = params.append("year", inyear);
    return this.http.get<Book[]>(this.url, { params });
  }

  /**
   * Reservations pour un mois
   * @param inyear L'année et le mois
   * @param inmonth 
   */
  getBooksFromMonth(inyear: number, inmonth: number){
    
  }
}
