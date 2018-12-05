import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Heroes } from "./heroes";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  /**
   * @override
   */
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', rank: 9 },
      { id: 12, name: 'Narco', rank: 10 },
      { id: 13, name: 'Bombasto', rank: 1 },
      { id: 14, name: 'Celeritas', rank: 2 },
      { id: 15, name: 'Magneta', rank: 7 },
      { id: 16, name: 'RubberMan', rank: 1 },
      { id: 17, name: 'Dynama', rank: 2 },
      { id: 18, name: 'Dr IQ' , rank: 5},
      { id: 19, name: 'Magma', rank: 8 },
      { id: 20, name: 'Tornado', rank: 6 }
    ];
    return {heroes};
  }

  genId(heroes: Heroes.HeroObject[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
