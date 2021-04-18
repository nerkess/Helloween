import { GameService } from './../../services/game.service';
import { Icon } from './../../models/card';
import { Component, Input, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() icon: Icon;

  constructor(private gameService: GameService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public cardClicked(){
    if(!this.gameService.twoIconsClicked() && !this.icon.clicked){
      this.icon.clicked = true;
      this.gameService.onIconClicked(this.icon); // hold the icons
    }else{
      this._snackBar.open('Open only 2 cards at a time!', 'Ok', {
        duration: 2000,
      });
    }
  }

}
