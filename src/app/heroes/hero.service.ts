import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";

import { Heroes } from "./index";

@Injectable({
  providedIn: 'root'
})
export class HeroService implements Resolve<Heroes.HeroObject> {

  public constructor() {
  }

  public resolve(route, state): any {
    return [{
      id: 1,
      name: "hero 1"
    }, {
      id: 2,
      name: "hero 2"
    }];
  }
}
