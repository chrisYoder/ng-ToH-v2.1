// angular modules
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// components, services, interfaces, etc
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../mock-heroes';
import { MessagesService } from '../messagesService/messages.service';



@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messagesService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the heroes
    this.messagesService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
