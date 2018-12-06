import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroService } from "./heroes/hero.service";

const routes: Routes = [
  {
    path: "", redirectTo: "/hero-dashboard", pathMatch: "full", resolve: {
      heroList: HeroService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
