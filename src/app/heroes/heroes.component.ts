import { Component, OnInit } from '@angular/core';
import { Hero, HEROES } from './heroes.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  public heroDetails: Hero = {id: 1, name: 'chanchel'}
  public HEROES = HEROES;
  public selectedHero: Hero;
  constructor() { }

  ngOnInit(): void {
  }

  public onSelect(hero: Hero){
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
}
