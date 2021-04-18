import { MatSnackBar } from '@angular/material/snack-bar';
import { GameService } from './../services/game.service';
import { FillCardsArray, AddScore, GameOver } from './game.actions';
import { Icon, ICONS } from './../models/card';
import { GameModel } from './../models/game';
import { Injectable } from '@angular/core';
import { Action, Select, Selector, State, StateContext } from '@ngxs/store';

@State<GameModel>({
  name: 'game',
  defaults: {
    targetScore: 0,
    score: 0,
    firstClickedCard: undefined,
    secondClickedCard: undefined,
    gameArray: []
  }
})

@Injectable()
export class GameState {
  constructor(private _snackBar: MatSnackBar){}

  @Selector()
  static getGameArray(state: GameModel){
    return state.gameArray
  }

  @Selector()
  static getScore(state: GameModel){
    return state.score
  }

  @Selector()
  static getTargetScore(state: GameModel){
    return state.targetScore
  }

  @Action(FillCardsArray)
  fillCardsArray(ctx: StateContext<GameModel>, { difficulty }: FillCardsArray){
    const state = ctx.getState();
    ctx.setState({
      ...state,
      targetScore: 20 * this.getDifficulty(difficulty),
      gameArray: this.fillArray(difficulty)
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

  @Action(GameOver)
  gameOver(ctx: StateContext<GameModel>){
    const state = ctx.getState();
    ctx.setState({
      ...state,
      score: 0
    });
  }

  private fillArray(difficulty: string): Icon[]{
    let randomIcons = ICONS.slice(0, this.getDifficulty(difficulty));
    randomIcons = randomIcons.concat(randomIcons).map(icon => ({
      id: icon.id,
      url: icon.url,
      clicked: icon.clicked
    }));
    this.shuffleArray(randomIcons);
    return randomIcons;
  }


  private getDifficulty(difficulty: string): number{
    switch(difficulty){
      case 'easy':
        return 4;
      case 'middle':
        return 6;
      case 'difficult':
        return 10;
    }
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
