import { GameService } from './../../services/game.service';
import { Icon } from './../../models/card';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() icon: Icon; 
  public clicked: boolean;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.clicked = false;
  }

  public cardClicked(){
    this.clicked = !this.clicked;
    if(this.clicked){ // card back was clicked
      console.log(this.icon);
      this.gameService.assign(this.icon); // hold the icons

      if(this.gameService.allAssigned()){ // two icons hold

        if(this.gameService.areSame()){ // icons are same

        }else{ // icons are not same
          console.log('not same');
        }

      }

    }
  }

}
