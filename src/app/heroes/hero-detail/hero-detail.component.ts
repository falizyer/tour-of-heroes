import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: number;

  constructor(
    private route: ActivatedRoute
  ) {
    console.log(route);
  }

  ngOnInit() {
  }

  save() {
    console.log(this);
  }

}
