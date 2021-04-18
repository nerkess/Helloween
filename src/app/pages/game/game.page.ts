import { GameModel } from './../../models/game';
import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { FillCardsArray } from 'src/app/state/game.actions';
import { Icon } from 'src/app/models/card';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss']
})
export class GamePage implements OnInit {

  gameArray$: Observable<Icon>;
  score$: Observable<number>;

  constructor(public gameService: GameService,
              private store: Store,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.dispatch(new FillCardsArray(this.route.snapshot.params['difficulty']));
    this.gameArray$ = this.store.select(state => state.game.gameArray);
    this.score$ = this.store.select(state => state.game.score);
  }

  getStyle(){
    switch(this.route.snapshot.params['difficulty']){
      case 'easy':
        return 'repeat(4, 1fr)';
      case 'middle':
        return 'repeat(4, 1fr)';
      case 'difficult':
        return 'repeat(5, 1fr)';
    }
  }

  newGame(){
    this.location.back();
  }
}
