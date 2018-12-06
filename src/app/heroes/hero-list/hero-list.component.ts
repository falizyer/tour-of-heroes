import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroes } from "../index";
import { FormControl, FormGroup } from "@angular/forms";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  private heroList: Heroes.HeroObject[];

  private hero = new FormGroup({
    name: new FormControl(''),
    rank: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private heroService: HeroService) {
  }

  private onSubmit(): void {
    const { name, rank } = this.hero.value;

    this.heroService.addHero({
      id: null,
      name,
      rank
    }).subscribe(hero => {
      console.log(name, this.heroList);
      this.heroList.push(hero);
    });
  }

  ngOnInit() {
    const { heroList } = this.route.snapshot.data;
    this.heroList = heroList;
  }

}
