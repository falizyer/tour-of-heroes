import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Heroes } from "../index";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private topRank: number;
  private heroList: Heroes.HeroObject[];

  constructor(private route: ActivatedRoute) {
    this.topRank = 5;
  }

  ngOnInit() {
    const { heroList } = this.route.snapshot.data;
    this.heroList = heroList;
  }
}
