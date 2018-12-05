import { Component, OnInit, Input } from '@angular/core';
import { Heroes } from "../index";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() dtHeroList: Heroes.HeroObject[];

  constructor() {
    this.dtHeroList = [{
      id: 0,
      name: "name 1"
    }, {
      id: 1,
      name: "name 2"
    }];
  }

  ngOnInit() {
  }

}
