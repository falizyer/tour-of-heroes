import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from "../index";

@Pipe({
  name: 'dashboardPipe'
})
export class DashboardPipePipe implements PipeTransform {

  transform(allHeroes: Heroes.HeroObject[] = [], topRank) {
    return allHeroes.slice(0, topRank);
  }
}
