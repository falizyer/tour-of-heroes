import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Heroes } from "./index";
import { Observable, of } from "rxjs";
import { mergeMap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class HeroService implements Resolve<Observable<any>> {

  private heroesUrl = "api/heroes";

  public constructor(private http: HttpClient) {
  }

  public updateHero(hero: Heroes.HeroObject): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions);
  }

  public getHeroes(): Observable<any> {
    return this.http.get<Heroes.HeroObject[]>(this.heroesUrl);
  }

  public getHero(id: number): Observable<any> {
    return this.http.get<Heroes.HeroObject[]>(`${this.heroesUrl}/${id}`);
  }

  public addHero(hero: Heroes.HeroObject): Observable<Heroes.HeroObject> {
    return this.http.post<Heroes.HeroObject>(this.heroesUrl, hero, httpOptions);
  }

  /**
   * @override
   * @param route
   * @param state
   */
  public resolve(route, state): Observable<any> {
    return this.getHeroes()
      .pipe(mergeMap((val: Array<any>) => of(val.sort((d1, d2) => d1.rank - d2.rank))));
  }
}
