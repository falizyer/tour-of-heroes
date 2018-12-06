import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Heroes } from "../index";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private topRank: number;
  private heroList: Heroes.HeroObject[];

  constructor(private route: ActivatedRoute, private heroService: HeroService) {
    this.topRank = 5;
  }

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(heroList => {
        this.heroList = heroList;
      });
  }
}
