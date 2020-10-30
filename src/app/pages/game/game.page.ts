import { Icon, ICONS } from './../../models/card';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss']
})
export class GamePage implements OnInit {
  public icons: Array<Icon>;
  public randomIcons: Array<Icon> = [];

  constructor() { }

  ngOnInit(): void {
    this.icons = ICONS;
    this.randomIcons = this.icons.slice(0, 10);
    this.randomIcons = this.randomIcons.concat(this.randomIcons);
    this.shuffleArray();
  }

  private shuffleArray(){
    this.randomIcons.sort(() => Math.random() - 0.5);
  }

}
