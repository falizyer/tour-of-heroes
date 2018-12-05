import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import { Heroes } from "./index";

@Injectable({
  providedIn: 'root'
})
export class HeroService implements Resolve<Heroes.HeroObject> {

  private heroesUrl = 'api/heroes';

  public constructor(private http: HttpClient) {
  }

  public resolve(route, state): any {
    return this.http.get<Heroes.HeroObject[]>(this.heroesUrl);
  }
}
