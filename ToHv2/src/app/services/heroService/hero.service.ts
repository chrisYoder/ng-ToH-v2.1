// angular modules
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

// components, services, interfaces, etc
import { Hero } from '../../interfaces/hero';
import { MessagesService } from '../messagesService/messages.service';




@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  
  constructor(
    private messagesService: MessagesService,
    private http: HttpClient
  ) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messagesService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', [])) // intercepts failed observer and passes the error to an error handler
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      
      // TODO: send the error to remote logging infrastructure
      console.error(error)
      
      // TODO: better job of transformin gerror for user consumption
      this.log(`${operation} failed: ${error.message}`);
      
      // TODO: keep the app runnin by returning an empty result
      return of(result as T);
    }
  }
  
  private log(message: string) {
    this.messagesService.add(`HeroService: ${message}`)
  }
  
  // TODO: GET hero by id. Will 404 if id not found
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
}
