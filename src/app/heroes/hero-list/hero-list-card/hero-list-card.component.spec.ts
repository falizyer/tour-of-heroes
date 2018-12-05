import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListCardComponent } from './hero-list-card.component';

describe('HeroListCardComponent', () => {
  let component: HeroListCardComponent;
  let fixture: ComponentFixture<HeroListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
