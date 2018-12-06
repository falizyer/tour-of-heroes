import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from "../index";

@Pipe({
  name: 'dashboardPipe'
})
export class DashboardPipePipe implements PipeTransform {

  transform(allHeroes: Heroes.HeroObject[] = [], topRank) {
    return allHeroes.sort((d1, d2) => d1.rank - d2.rank).slice(0, topRank);
  }
}
