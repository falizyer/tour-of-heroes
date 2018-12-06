import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardPipePipe } from './dashboard/dashboard-pipe.pipe';

@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    DashboardComponent,
    DashboardPipePipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HeroesModule {
}
