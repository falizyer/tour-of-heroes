import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from "../hero.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit, OnDestroy {

  private sub: any;
  private hero: FormGroup;

  constructor(private route: ActivatedRoute, private heroService: HeroService) {
  }

  public ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.heroService.getHeroes()
        .subscribe(heroList => {
          const hero = heroList.find(d => d.id === +params['id']);
          this.hero = new FormGroup({
            id: new FormControl(hero.id),
            name: new FormControl(hero.name),
            rank: new FormControl(hero.rank)
          });
        });
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private onSubmit() {
    if (!this.hero) {
      return;
    }
    const { id, name, rank } = this.hero.value;
    this.heroService.updateHero({
      id, name, rank
    });
  }
}
