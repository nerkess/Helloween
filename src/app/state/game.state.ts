import { MatSnackBar } from '@angular/material/snack-bar';
import { GameService } from './../services/game.service';
import { FillCardsArray, AddScore } from './game.actions';
import { Icon, ICONS } from './../models/card';
import { Injectable } from '@angular/core';
import { Action, Select, Selector, State, StateContext } from '@ngxs/store';

export interface GameModel{
  score: number,
  firstClickedCard: Icon,
  secondClickedCard: Icon,
  gameArray: Icon[],
}

@State<GameModel>({
  name: 'game',
  defaults: {
    score: 0,
    firstClickedCard: undefined,
    secondClickedCard: undefined,
    gameArray: []
  }
})

@Injectable()
export class GameState {
  constructor(private gameService: GameService, private _snackBar: MatSnackBar){}

  @Selector()
  static getGameArray(state: GameModel){
    return state.gameArray
  }

  @Selector()
  static getScore(state: GameModel){
    return state.score
  }

  @Action(FillCardsArray)
  fillCardsArray(ctx: StateContext<GameModel>, { count }: FillCardsArray){
    const state = ctx.getState();
    ctx.setState({
      ...state,
      gameArray: this.fillArray(count)
    });
  }

  @Action(AddScore)
  addScore(ctx: StateContext<GameModel>){
    const state = ctx.getState();
    ctx.setState({
      ...state,
      score: state.score += 20
    });
  }

  private fillArray(count: number): Icon[]{
    let randomIcons = ICONS.slice(0, count);
    randomIcons = randomIcons.concat(randomIcons).map(icon => ({
      id: icon.id,
      url: icon.url,
      clicked: icon.clicked
    }));
    this.shuffleArray(randomIcons);
    return randomIcons;
  }

  private shuffleArray(randomIcons){
    randomIcons.sort(() => Math.random() - 0.5);
  }

  private snackbarOpen(message1: string, message2: string){
    this._snackBar.open(message1, message2, {
      duration: 2000,
    });
  }
}
