import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroListComponent } from "./hero-list/hero-list.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroService } from "./hero.service";

const routes: Routes = [
  {
    path: "hero-dashboard", component: DashboardComponent, resolve: {
      heroList$: HeroService
    }
  },
  {
    path: "heroes", component: HeroListComponent, resolve: {
      heroList$: HeroService
    }
  },
  { path: "heroes/:id", component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [HeroService]
})
export class HeroesRoutingModule {
}
