import { MatSnackBar } from '@angular/material/snack-bar';
import { FillCards, AddScore, GameOver } from './game.actions';
import { Icon, ICONS } from './../models/card';
import { GameModel } from './../models/game';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

@State<GameModel>({
  name: 'game',
  defaults: {
    targetScore: 0,
    score: 0,
    gameArray: []
  }
})

@Injectable()
export class GameState {
  constructor(private _snackBar: MatSnackBar){}

  @Selector()
  static getGameArray(state: GameModel){
    return state.gameArray;
  }

  @Selector()
  static getScore(state: GameModel){
    return state.score;
  }

  @Selector()
  static getTargetScore(state: GameModel){
    return state.targetScore;
  }

  @Action(FillCards)
  fillCardsArray(ctx: StateContext<GameModel>, { difficulty }: FillCards){
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
    let randomIcons = [];
    for(let i = 0; i < this.getDifficulty(difficulty); ++i) {
      let tempIcon;
      do{
        tempIcon = ICONS[Math.floor(Math.random() * ICONS.length)];
      }while(randomIcons.includes(tempIcon));
      randomIcons.push({ // clone, not copy, because of the reference
        id: tempIcon.id,
        url: tempIcon.url,
        clicked: tempIcon.clicked
      });
      randomIcons.push({ // clone, not copy, because of the reference
        id: tempIcon.id,
        url: tempIcon.url,
        clicked: tempIcon.clicked
      });
    }
    this.shuffleArray(randomIcons);
    console.warn(randomIcons)
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
}
