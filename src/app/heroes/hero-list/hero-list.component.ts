import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroes } from "../index";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  private dtHeroList: Heroes.HeroObject[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const {dtHeroList} = this.route.snapshot.data;
    this.dtHeroList = dtHeroList;
  }

}
