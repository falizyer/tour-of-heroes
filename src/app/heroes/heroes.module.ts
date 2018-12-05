import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroListCardComponent } from './hero-list/hero-list-card/hero-list-card.component';
import { DashboardCardComponent } from './dashboard/dashboard-card/dashboard-card.component';

@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent, DashboardComponent, HeroListCardComponent, DashboardCardComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
