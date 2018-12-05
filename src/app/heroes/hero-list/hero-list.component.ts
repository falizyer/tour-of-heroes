import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroes } from "../index";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  private heroList$: Heroes.HeroObject[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const {heroList$} = this.route.snapshot.data;
    this.heroList$ = heroList$;
  }

}
